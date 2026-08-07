from typing import Optional

from pydantic import BaseModel, EmailStr


# -------------------------
# Base Schema
# -------------------------

class UserBase(BaseModel):
    full_name: str
    email: EmailStr


# -------------------------
# Register
# -------------------------

class UserCreate(UserBase):
    password: str


# -------------------------
# Login
# -------------------------

class UserLogin(BaseModel):
    email: EmailStr
    password: str


# -------------------------
# Update Profile
# -------------------------

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None


# -------------------------
# Response
# -------------------------

class UserResponse(UserBase):
    id: int
    role: str
    is_active: bool

    class Config:
        from_attributes = True


# -------------------------
# JWT Token
# -------------------------

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


# -------------------------
# Token Payload
# -------------------------

class TokenData(BaseModel):
    email: Optional[str] = None