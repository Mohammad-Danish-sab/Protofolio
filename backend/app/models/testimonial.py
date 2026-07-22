from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)

    position = Column(String(150), nullable=True)

    company = Column(String(150), nullable=True)

    message = Column(Text, nullable=False)

    rating = Column(Integer, default=5)

    image = Column(String(500), nullable=True)