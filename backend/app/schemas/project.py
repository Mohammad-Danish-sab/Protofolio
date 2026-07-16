from pydantic import BaseModel
from typing import Optional


class ProjectBase(BaseModel):
    title: str
    description: str

    image: Optional[str] = None

    github_link: Optional[str] = None
    live_link: Optional[str] = None

    tech_stack: Optional[str] = None

    category: Optional[str] = None
    featured: bool = False

    status: str = "Completed"


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True