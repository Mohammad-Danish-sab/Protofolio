from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# Project Schemas
class ProjectBase(BaseModel):
    title: str
    description: str
    category: str
    image_url: str
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    technologies: List[str]
    featured: bool = False

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Contact Schemas
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(ContactCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Skill Schemas
class SkillResponse(BaseModel):
    id: int
    name: str
    category: str
    icon: str
    proficiency: int

    class Config:
        from_attributes = True

# Experience Schemas
class ExperienceResponse(BaseModel):
    id: int
    company: str
    role: str
    start_date: str
    end_date: str
    description: str
    technologies: List[str]

    class Config:
        from_attributes = True