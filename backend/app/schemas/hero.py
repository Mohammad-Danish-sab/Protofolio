from pydantic import BaseModel


class HeroResponse(BaseModel):

    id: int

    name: str

    profession: str

    description: str | None = None

    image: str | None = None

    resume: str | None = None

    github: str | None = None

    linkedin: str | None = None

    instagram: str | None = None

    twitter: str | None = None

    cta_text: str | None = None

    cta_link: str | None = None

    class Config:
        from_attributes = True