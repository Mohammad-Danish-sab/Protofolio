from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import SessionLocal

from app.schemas.contact import (
    ContactCreate,
    ContactResponse,
)

from app.crud.contact import (
    create_contact,
    get_contacts,
)

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=ContactResponse)
def send_message(
    contact: ContactCreate,
    db: Session = Depends(get_db),
):
    return create_contact(db, contact)


@router.get("/", response_model=list[ContactResponse])
def all_messages(
    db: Session = Depends(get_db),
):
    return get_contacts(db)