from sqlalchemy import Column, Integer, String, Text, JSON
from app.core.database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String, nullable=False)
    technologies = Column(JSON, default=[])
    github_url = Column(String, nullable=True)
    live_url = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
    screenshots = Column(JSON, default=[])