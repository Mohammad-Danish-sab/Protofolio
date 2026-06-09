from pydantic import BaseModel


class ProjectCreate(BaseModel):
    title: str
    description: str
    image: str
    github_link: str
    live_link: str
    tech_stack: str


class ProjectResponse(ProjectCreate):
    id: int

    class Config:
        from_attributes = True