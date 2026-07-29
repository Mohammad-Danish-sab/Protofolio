from pydantic import BaseModel


class ServiceCreate(BaseModel):

    title: str

    description: str

    icon: str

    color: str


class ServiceResponse(ServiceCreate):

    id: int

    class Config:
        from_attributes = True