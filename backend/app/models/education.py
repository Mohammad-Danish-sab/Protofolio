from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Education(Base):
    __tablename__ = "education"

    id = Column(Integer, primary_key=True, index=True)

    degree = Column(String(200), nullable=False)

    institution = Column(String(200), nullable=False)

    university = Column(String(200), nullable=True)

    location = Column(String(100), nullable=True)

    start_year = Column(String(20), nullable=False)

    end_year = Column(String(20), nullable=False)

    grade = Column(String(50), nullable=True)

    description = Column(Text, nullable=True)

    logo = Column(String(500), nullable=True)