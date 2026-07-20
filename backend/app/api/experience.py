from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.experience import Experience
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceUpdate,
    ExperienceResponse,
)

router = APIRouter(
    prefix="/experience",
    tags=["Experience"],
)


@router.post("/", response_model=ExperienceResponse)
def create_experience(
    data: ExperienceCreate,
    db: Session = Depends(get_db),
):
    experience = Experience(**data.model_dump())

    db.add(experience)
    db.commit()
    db.refresh(experience)

    return experience


@router.get("/", response_model=list[ExperienceResponse])
def get_experiences(
    db: Session = Depends(get_db),
):
    return db.query(Experience).all()


@router.get("/{experience_id}", response_model=ExperienceResponse)
def get_experience(
    experience_id: int,
    db: Session = Depends(get_db),
):
    experience = db.query(Experience).filter(
        Experience.id == experience_id
    ).first()

    if not experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found"
        )

    return experience


@router.put("/{experience_id}", response_model=ExperienceResponse)
def update_experience(
    experience_id: int,
    data: ExperienceUpdate,
    db: Session = Depends(get_db),
):
    experience = db.query(Experience).filter(
        Experience.id == experience_id
    ).first()

    if not experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found"
        )

    for key, value in data.model_dump().items():
        setattr(experience, key, value)

    db.commit()
    db.refresh(experience)

    return experience


@router.delete("/{experience_id}")
def delete_experience(
    experience_id: int,
    db: Session = Depends(get_db),
):
    experience = db.query(Experience).filter(
        Experience.id == experience_id
    ).first()

    if not experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found"
        )

    db.delete(experience)
    db.commit()

    return {
        "message": "Experience deleted successfully"
    }