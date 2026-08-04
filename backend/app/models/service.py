from sqlalchemy import Column, Integer, String, Text

from app.core.database import Base


class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200), nullable=False)

    description = Column(Text, nullable=False)

    icon = Column(String(100), nullable=False)

    color = Column(String(20), default="#06b6d4")