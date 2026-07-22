from pydantic import BaseModel
from typing import Optional


class EducationBase(BaseModel):
    degree: str
    institution: str
    university: Optional[str] = None
    location: Optional[str] = None
    start_year: str
    end_year: str
    grade: Optional[str] = None
    description: Optional[str] = None
    logo: Optional[str] = None


class EducationCreate(EducationBase):
    pass


class EducationUpdate(EducationBase):
    pass


class EducationResponse(EducationBase):
    id: int

    class Config:
        from_attributes = True