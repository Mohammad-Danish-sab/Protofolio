from pydantic import BaseModel
from typing import Optional


class ExperienceBase(BaseModel):
    company: str
    role: str
    duration: str
    location: Optional[str] = None
    description: Optional[str] = None
    technologies: Optional[str] = None
    company_logo: Optional[str] = None
    employment_type: Optional[str] = None


class ExperienceCreate(ExperienceBase):
    pass


class ExperienceUpdate(ExperienceBase):
    pass


class ExperienceResponse(ExperienceBase):
    id: int

    class Config:
        from_attributes = True