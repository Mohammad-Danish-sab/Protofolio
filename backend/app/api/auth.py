from fastapi import APIRouter, HTTPException

from app.schemas.auth import (
    LoginRequest,
    TokenResponse,
)

from app.core.security import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(data: LoginRequest):

    if (
        data.username != ADMIN_USERNAME
        or data.password != ADMIN_PASSWORD
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {"sub": data.username}
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }