from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class About(Base):
    __tablename__ = "about"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    title = Column(String(200), nullable=False)

    subtitle = Column(Text)

    description = Column(Text)

    image = Column(String(500))

    resume = Column(String(500))

    location = Column(String(100))

    email = Column(String(150))

    experience = Column(String(50))

    projects = Column(String(50))

    technologies = Column(String(50))