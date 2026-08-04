from pydantic import BaseModel
from typing import Optional


class SkillBase(BaseModel):
    name: str
    icon: str
    category: str
    level: int
    color: str


class SkillCreate(SkillBase):
    pass


class SkillUpdate(BaseModel):
    name: Optional[str] = None
    icon: Optional[str] = None
    category: Optional[str] = None
    level: Optional[int] = None
    color: Optional[str] = None


class SkillResponse(SkillBase):
    id: int

    class Config:
        from_attributes = True