from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String(150), nullable=False)

    role = Column(String(150), nullable=False)

    duration = Column(String(100), nullable=False)

    location = Column(String(100), nullable=True)

    description = Column(Text, nullable=True)

    technologies = Column(String(300), nullable=True)

    company_logo = Column(String(500), nullable=True)

    employment_type = Column(String(50), nullable=True)