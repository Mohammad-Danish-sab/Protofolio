from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.user import User
from app.schemas.user import UserCreate, UserLogin
from app.utils.security import (
    hash_password,
    verify_password,
    create_access_token,
)


class AuthService:

    @staticmethod
    def register(db: Session, user: UserCreate):

        existing_user = (
            db.query(User)
            .filter(User.email == user.email)
            .first()
        )

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )

        new_user = User(
            name=user.full_name,
            email=user.email,
            password=hash_password(user.password),
            is_admin=True,
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    @staticmethod
    def login(db: Session, user: UserLogin):

        print("=" * 60)
        print("Email Entered:", user.email)

        users = db.query(User).all()

        print("All Users:")
        for u in users:
            print(
                f"ID={u.id}, "
                f"NAME={u.name}, "
                f"EMAIL={u.email}"
            )

        db_user = (
            db.query(User)
            .filter(User.email == user.email)
            .first()
        )

        print("User Found:", db_user)

        if db_user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )

        valid = verify_password(
            user.password,
            db_user.password,
        )

        print("Password Match:", valid)

        if not valid:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )

        access_token = create_access_token(
            data={
                "sub": db_user.email,
                "id": db_user.id,
                "is_admin": db_user.is_admin,
            }
        )

        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": db_user,
        }

    @staticmethod
    def get_user_by_email(
        db: Session,
        email: str,
    ):
        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )