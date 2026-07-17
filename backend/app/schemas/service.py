from pydantic import BaseModel
from typing import Optional


class ServiceBase(BaseModel):
    title: str
    description: str
    icon: Optional[str] = None
    color: Optional[str] = None
    featured: bool = False


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(ServiceBase):
    pass


class ServiceResponse(ServiceBase):
    id: int

    class Config:
        from_attributes = True