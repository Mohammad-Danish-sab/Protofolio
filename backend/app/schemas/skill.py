from pydantic import BaseModel
from typing import Optional

class SkillBase(BaseModel):
    name: str
    category: str
    icon_name: Optional[str] = None

class SkillCreate(SkillBase):
    pass

class SkillResponse(SkillBase):
    id: int

    class Config:
        from_attributes = True