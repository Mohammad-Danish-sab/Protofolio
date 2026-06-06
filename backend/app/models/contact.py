from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100))
    email = Column(String(150))
    subject = Column(String(200))
    message = Column(Text)