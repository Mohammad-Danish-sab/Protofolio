from fastapi import FastAPI

from app.core.database import Base, engine
from app.models import *

Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Portfolio Backend Running "
    }