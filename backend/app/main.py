from fastapi import FastAPI

from app.core.database import Base, engine
from app.models import *

from app.api.projects import router as project_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(contact_router)
app.include_router(project_router)


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend Running "
    }