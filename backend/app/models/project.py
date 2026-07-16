from sqlalchemy import Column, Integer, String, Text, Boolean
from app.core.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)

    image = Column(String(500), nullable=True)

    github_link = Column(String(500), nullable=True)
    live_link = Column(String(500), nullable=True)

    tech_stack = Column(String(500), nullable=True)

    category = Column(String(100), nullable=True)
    featured = Column(Boolean, default=False)

    status = Column(String(50), default="Completed")