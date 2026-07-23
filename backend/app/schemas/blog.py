from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class BlogBase(BaseModel):

    title: str

    slug: str

    short_description: Optional[str] = None

    content: Optional[str] = None

    cover_image: Optional[str] = None

    category: Optional[str] = None

    tags: Optional[str] = None

    author: Optional[str] = None

    read_time: Optional[str] = None

    featured: bool = False

    published: bool = True


class BlogCreate(BlogBase):
    pass


class BlogUpdate(BlogBase):
    pass


class BlogResponse(BlogBase):

    id: int

    created_at: datetime

    updated_at: datetime

    class Config:
        from_attributes = True