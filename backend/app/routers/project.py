from typing import Optional

from fastapi import APIRouter
from fastapi import Depends
from fastapi import UploadFile
from fastapi import File
from fastapi import Form

from sqlalchemy.orm import Session

from app.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectResponse
from app.services.project_service import save_image

router = APIRouter(prefix="/projects", tags=["Projects"])

@router.get("/", response_model=list[ProjectResponse])

def get_projects(db: Session = Depends(get_db)):

    return db.query(Project).all()


@router.get("/{project_id}", response_model=ProjectResponse)

def get_project(project_id: int, db: Session = Depends(get_db)):

    return db.query(Project).filter(Project.id == project_id).first()


@router.post("/", response_model=ProjectResponse)

def create_project(

    title: str = Form(...),

    description: str = Form(...),

    tech_stack: str = Form(...),

    github_link: str = Form(""),

    live_link: str = Form(""),

    featured: bool = Form(False),

    image: UploadFile = File(None),

    db: Session = Depends(get_db)

):

    image_path = save_image(image)

    project = Project(

        title=title,

        description=description,

        tech_stack=tech_stack,

        github_link=github_link,

        live_link=live_link,

        featured=featured,

        image=image_path

    )

    db.add(project)

    db.commit()

    db.refresh(project)

    return project


@router.put("/{project_id}", response_model=ProjectResponse)

def update_project(

    project_id: int,

    title: str = Form(...),

    description: str = Form(...),

    tech_stack: str = Form(...),

    github_link: str = Form(""),

    live_link: str = Form(""),

    featured: bool = Form(False),

    image: Optional[UploadFile] = File(None),

    db: Session = Depends(get_db)

):

    project = db.query(Project).filter(Project.id == project_id).first()

    project.title = title

    project.description = description

    project.tech_stack = tech_stack

    project.github_link = github_link

    project.live_link = live_link

    project.featured = featured

    if image:

        project.image = save_image(image)

    db.commit()

    db.refresh(project)

    return project


@router.delete("/{project_id}")

def delete_project(

    project_id: int,

    db: Session = Depends(get_db)

):

    project = db.query(Project).filter(Project.id == project_id).first()

    db.delete(project)

    db.commit()

    return {

        "message": "Project deleted"

    }
