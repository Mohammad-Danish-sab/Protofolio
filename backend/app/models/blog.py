from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Boolean,
    DateTime
)
from datetime import datetime

from app.core.database import Base


class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    slug = Column(String(255), unique=True, nullable=False)

    short_description = Column(Text)

    content = Column(Text)

    cover_image = Column(String(500))

    category = Column(String(100))

    tags = Column(String(300))

    author = Column(String(100))

    read_time = Column(String(30))

    featured = Column(Boolean, default=False)

    published = Column(Boolean, default=True)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )