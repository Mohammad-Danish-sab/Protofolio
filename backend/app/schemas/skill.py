from pydantic import BaseModel


class SkillCreate(BaseModel):

    name: str

    icon: str

    category: str

    level: int

    color: str


class SkillResponse(SkillCreate):

    id: int

    class Config:
        from_attributes = True