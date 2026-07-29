from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.service import Service
from app.schemas.service import ServiceCreate, ServiceResponse

router = APIRouter(
    prefix="/services",
    tags=["Services"],
)

@router.get("/", response_model=list[ServiceResponse])

def get_services(db: Session = Depends(get_db)):
    return db.query(Service).all()


@router.get("/{service_id}", response_model=ServiceResponse)

def get_service(service_id: int, db: Session = Depends(get_db)):
    return db.query(Service).filter(
        Service.id == service_id
    ).first()

@router.post("/", response_model=ServiceResponse)

def create_service(
    payload: ServiceCreate,
    db: Session = Depends(get_db)
):

    service = Service(**payload.model_dump())

    db.add(service)

    db.commit()

    db.refresh(service)

    return service

@router.put("/{service_id}", response_model=ServiceResponse)

def update_service(
    service_id: int,
    payload: ServiceCreate,
    db: Session = Depends(get_db)
):

    service = db.query(Service).filter(
        Service.id == service_id
    ).first()

    for key, value in payload.model_dump().items():
        setattr(service, key, value)

    db.commit()

    db.refresh(service)

    return service


@router.delete("/{service_id}")

def delete_service(
    service_id: int,
    db: Session = Depends(get_db)
):

    service = db.query(Service).filter(
        Service.id == service_id
    ).first()

    db.delete(service)

    db.commit()

    return {
        "message": "Service deleted successfully"
    }

