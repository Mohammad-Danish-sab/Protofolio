from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.portfolio import ContactMessage
from app.schemas.portfolio import ContactCreate, ContactResponse

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def send_contact_message(payload: ContactCreate, db: Session = Depends(get_db)):
    db_message = ContactMessage(**payload.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message