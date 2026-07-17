from sqlalchemy import Column, Integer, String, Text, Boolean
from app.core.database import Base


class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(150), nullable=False)

    description = Column(Text, nullable=False)

    icon = Column(String(100), nullable=True)

    color = Column(String(50), nullable=True)

    featured = Column(Boolean, default=False)