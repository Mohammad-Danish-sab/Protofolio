from sqlalchemy import Column, Integer, String
from app.core.database import Base


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    category = Column(String(100), nullable=False)

    icon = Column(String(100), nullable=True)

    level = Column(Integer, nullable=False)