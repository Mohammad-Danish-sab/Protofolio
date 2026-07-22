from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.education import Education
from app.schemas.education import (
    EducationCreate,
    EducationUpdate,
    EducationResponse,
)

router = APIRouter(
    prefix="/education",
    tags=["Education"],
)


@router.post("/", response_model=EducationResponse)
def create_education(
    data: EducationCreate,
    db: Session = Depends(get_db),
):
    education = Education(**data.model_dump())

    db.add(education)
    db.commit()
    db.refresh(education)

    return education


@router.get("/", response_model=list[EducationResponse])
def get_all_education(
    db: Session = Depends(get_db),
):
    return db.query(Education).all()


@router.get("/{education_id}", response_model=EducationResponse)
def get_education(
    education_id: int,
    db: Session = Depends(get_db),
):
    education = db.query(Education).filter(
        Education.id == education_id
    ).first()

    if not education:
        raise HTTPException(
            status_code=404,
            detail="Education not found"
        )

    return education


@router.put("/{education_id}", response_model=EducationResponse)
def update_education(
    education_id: int,
    data: EducationUpdate,
    db: Session = Depends(get_db),
):
    education = db.query(Education).filter(
        Education.id == education_id
    ).first()

    if not education:
        raise HTTPException(
            status_code=404,
            detail="Education not found"
        )

    for key, value in data.model_dump().items():
        setattr(education, key, value)

    db.commit()
    db.refresh(education)

    return education


@router.delete("/{education_id}")
def delete_education(
    education_id: int,
    db: Session = Depends(get_db),
):
    education = db.query(Education).filter(
        Education.id == education_id
    ).first()

    if not education:
        raise HTTPException(
            status_code=404,
            detail="Education not found"
        )

    db.delete(education)
    db.commit()

    return {
        "message": "Education deleted successfully"
    }