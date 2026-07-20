from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.about import About

from app.schemas.about import (
    AboutCreate,
    AboutUpdate,
    AboutResponse,
)

router = APIRouter(
    prefix="/about",
    tags=["About"],
)


@router.post("/", response_model=AboutResponse)
def create_about(
    data: AboutCreate,
    db: Session = Depends(get_db),
):
    about = About(**data.model_dump())

    db.add(about)
    db.commit()
    db.refresh(about)

    return about


@router.get("/", response_model=list[AboutResponse])
def get_about(
    db: Session = Depends(get_db),
):
    return db.query(About).all()


@router.get("/{about_id}", response_model=AboutResponse)
def get_about_by_id(
    about_id: int,
    db: Session = Depends(get_db),
):
    about = db.query(About).filter(
        About.id == about_id
    ).first()

    if not about:
        raise HTTPException(
            status_code=404,
            detail="About not found"
        )

    return about


@router.put("/{about_id}", response_model=AboutResponse)
def update_about(
    about_id: int,
    data: AboutUpdate,
    db: Session = Depends(get_db),
):
    about = db.query(About).filter(
        About.id == about_id
    ).first()

    if not about:
        raise HTTPException(
            status_code=404,
            detail="About not found"
        )

    for key, value in data.model_dump().items():
        setattr(about, key, value)

    db.commit()
    db.refresh(about)

    return about


@router.delete("/{about_id}")
def delete_about(
    about_id: int,
    db: Session = Depends(get_db),
):
    about = db.query(About).filter(
        About.id == about_id
    ).first()

    if not about:
        raise HTTPException(
            status_code=404,
            detail="About not found"
        )

    db.delete(about)
    db.commit()

    return {
        "message": "About deleted successfully"
    }