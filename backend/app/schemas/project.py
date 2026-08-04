from pydantic import BaseModel
from typing import Optional


class ProjectBase(BaseModel):
    title: str
    description: str
    image: Optional[str] = None
    tech_stack: str
    github_link: Optional[str] = None
    live_link: Optional[str] = None
    featured: bool = False


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    tech_stack: Optional[str] = None
    github_link: Optional[str] = None
    live_link: Optional[str] = None
    featured: Optional[bool] = None


class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True