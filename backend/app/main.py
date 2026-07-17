from fastapi import FastAPI

from app.core.database import Base, engine

from app.core.cors import add_cors

from app.models import *

from app.api.contact import router as contact_router
from app.api.projects import router as project_router
from app.api.auth import router as auth_router
from app.api.dashboard import router as dashboard_router
from app.api.skills import router as skill_router
from app.api.services import router as service_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

add_cors(app)

app.include_router(contact_router)
app.include_router(project_router)
app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(skill_router)
app.include_router(service_router)


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend Running 🚀"
    }