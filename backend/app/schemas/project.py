from typing import List, Optional
from pydantic import BaseModel

class ProjectBase(BaseModel):
    title: str
    description: str
    category: str
    technologies: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    screenshots: Optional[List[str]] = []

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True