from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.skill import Skill
from app.schemas.skill import SkillCreate, SkillResponse

router = APIRouter(
    prefix="/skills",
    tags=["Skills"],
)

@router.get("/", response_model=list[SkillResponse])
def get_skills(db: Session = Depends(get_db)):
    return db.query(Skill).all()


@router.get("/{skill_id}", response_model=SkillResponse)
def get_skill(skill_id: int, db: Session = Depends(get_db)):
    return db.query(Skill).filter(
        Skill.id == skill_id
    ).first()


@router.post("/", response_model=SkillResponse)
def create_skill(
    payload: SkillCreate,
    db: Session = Depends(get_db),
):

    skill = Skill(**payload.model_dump())

    db.add(skill)

    db.commit()

    db.refresh(skill)

    return skill


@router.put("/{skill_id}", response_model=SkillResponse)
def update_skill(
    skill_id: int,
    payload: SkillCreate,
    db: Session = Depends(get_db),
):

    skill = db.query(Skill).filter(
        Skill.id == skill_id
    ).first()

    for key, value in payload.model_dump().items():
        setattr(skill, key, value)

    db.commit()

    db.refresh(skill)

    return skill

@router.delete("/{skill_id}")
def delete_skill(
    skill_id: int,
    db: Session = Depends(get_db),
):

    skill = db.query(Skill).filter(
        Skill.id == skill_id
    ).first()

    db.delete(skill)

    db.commit()

    return {
        "message": "Skill deleted successfully"
    }


