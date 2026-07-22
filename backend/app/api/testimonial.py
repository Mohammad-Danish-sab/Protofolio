from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.testimonial import Testimonial
from app.schemas.testimonial import (
    TestimonialCreate,
    TestimonialUpdate,
    TestimonialResponse,
)

router = APIRouter(
    prefix="/testimonials",
    tags=["Testimonials"],
)


@router.post("/", response_model=TestimonialResponse)
def create_testimonial(
    data: TestimonialCreate,
    db: Session = Depends(get_db),
):
    testimonial = Testimonial(**data.model_dump())

    db.add(testimonial)
    db.commit()
    db.refresh(testimonial)

    return testimonial


@router.get("/", response_model=list[TestimonialResponse])
def get_testimonials(
    db: Session = Depends(get_db),
):
    return db.query(Testimonial).all()


@router.get("/{testimonial_id}", response_model=TestimonialResponse)
def get_testimonial(
    testimonial_id: int,
    db: Session = Depends(get_db),
):
    testimonial = db.query(Testimonial).filter(
        Testimonial.id == testimonial_id
    ).first()

    if not testimonial:
        raise HTTPException(
            status_code=404,
            detail="Testimonial not found"
        )

    return testimonial


@router.put("/{testimonial_id}", response_model=TestimonialResponse)
def update_testimonial(
    testimonial_id: int,
    data: TestimonialUpdate,
    db: Session = Depends(get_db),
):
    testimonial = db.query(Testimonial).filter(
        Testimonial.id == testimonial_id
    ).first()

    if not testimonial:
        raise HTTPException(
            status_code=404,
            detail="Testimonial not found"
        )

    for key, value in data.model_dump().items():
        setattr(testimonial, key, value)

    db.commit()
    db.refresh(testimonial)

    return testimonial


@router.delete("/{testimonial_id}")
def delete_testimonial(
    testimonial_id: int,
    db: Session = Depends(get_db),
):
    testimonial = db.query(Testimonial).filter(
        Testimonial.id == testimonial_id
    ).first()

    if not testimonial:
        raise HTTPException(
            status_code=404,
            detail="Testimonial not found"
        )

    db.delete(testimonial)
    db.commit()

    return {
        "message": "Testimonial deleted successfully"
    }