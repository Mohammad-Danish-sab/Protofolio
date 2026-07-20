from pydantic import BaseModel
from typing import Optional


class AboutBase(BaseModel):
    name: str
    title: str
    subtitle: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    resume: Optional[str] = None
    location: Optional[str] = None
    email: Optional[str] = None
    experience: Optional[str] = None
    projects: Optional[str] = None
    technologies: Optional[str] = None


class AboutCreate(AboutBase):
    pass


class AboutUpdate(AboutBase):
    pass


class AboutResponse(AboutBase):
    id: int

    class Config:
        from_attributes = True