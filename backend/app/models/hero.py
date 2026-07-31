from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Hero(Base):
    __tablename__ = "hero"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)

    profession = Column(String(200), nullable=False)

    description = Column(Text)

    image = Column(String(500))

    resume = Column(String(500))

    github = Column(String(300))

    linkedin = Column(String(300))

    instagram = Column(String(300))

    twitter = Column(String(300))

    cta_text = Column(String(100))

    cta_link = Column(String(300))