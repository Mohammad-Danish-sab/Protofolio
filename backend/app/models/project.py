from sqlalchemy import Column, Integer, String, Boolean, Text
from app.core.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    description = Column(Text, nullable=False)

    image = Column(String(500), nullable=True)

    tech_stack = Column(String(255), nullable=False)

    github_link = Column(String(500))

    live_link = Column(String(500))

    featured = Column(Boolean, default=False)