from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200))
    description = Column(Text)
    image = Column(String(500))
    github_link = Column(String(500))
    live_link = Column(String(500))
    tech_stack = Column(String(300))