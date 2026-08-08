from app.core.database import SessionLocal
from app.models.user import User
from app.utils.security import hash_password

db = SessionLocal()

# Check if admin already exists
existing_admin = db.query(User).filter(
    User.email == "admin@gmail.com"
).first()

if existing_admin:
    print("Admin already exists!")
else:
    admin = User(
        full_name="Danish",
        email="danish.sab05@gmail.com",
        password=hash_password("@danish9934"),
        role="admin",
        is_active=True,
    )

    db.add(admin)
    db.commit()

    print("Admin created successfully!")