from pydantic import BaseModel
from typing import Optional


class TestimonialBase(BaseModel):
    name: str
    position: Optional[str] = None
    company: Optional[str] = None
    message: str
    rating: int = 5
    image: Optional[str] = None


class TestimonialCreate(TestimonialBase):
    pass


class TestimonialUpdate(TestimonialBase):
    pass


class TestimonialResponse(TestimonialBase):
    id: int

    class Config:
        from_attributes = True