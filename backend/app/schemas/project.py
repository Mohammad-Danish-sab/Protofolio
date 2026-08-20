from pydantic import BaseModel, ConfigDict
from typing import List, Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    category: str
    technologies: List[str] = []
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    screenshots: List[str] = []

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int

    model_config = ConfigDict(from_attributes=True)