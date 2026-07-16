from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.skill import Skill
from app.schemas.skill import (
    SkillCreate,
    SkillResponse
)

router = APIRouter(
    prefix="/skills",
    tags=["Skills"]
)


@router.post(
    "/",
    response_model=SkillResponse
)
def create_skill(
    data: SkillCreate,
    db: Session = Depends(get_db)
):
    skill = Skill(**data.model_dump())

    db.add(skill)
    db.commit()
    db.refresh(skill)

    return skill


@router.get(
    "/",
    response_model=list[SkillResponse]
)
def get_skills(
    db: Session = Depends(get_db)
):
    return db.query(Skill).all()