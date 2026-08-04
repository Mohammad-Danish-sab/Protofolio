from pydantic import BaseModel
from typing import Optional


class ServiceBase(BaseModel):
    title: str
    description: str
    icon: str


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    icon: Optional[str] = None


class ServiceResponse(ServiceBase):
    id: int

    class Config:
        from_attributes = True