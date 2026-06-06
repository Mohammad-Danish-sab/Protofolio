from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str

    class Config:
        from_attributes = True