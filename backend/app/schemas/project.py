from pydantic import BaseModel


class ProjectResponse(BaseModel):

    id: int

    title: str

    description: str

    image: str | None = None

    tech_stack: str

    github_link: str | None = None

    live_link: str | None = None

    featured: bool

    class Config:
        from_attributes = True