import os
import shutil
import uuid
import json
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Form, UploadFile, File
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectResponse

router = APIRouter(prefix="/api/v1/projects", tags=["Projects"])

ADMIN_SECRET_KEY = os.getenv("ADMIN_SECRET_KEY", "admin123")
UPLOAD_DIR = "static/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_file(file: UploadFile) -> str:
    """Saves uploaded file and returns path."""
    file_ext = os.path.splitext(file.filename)[1]
    filename = f"{uuid.uuid4()}{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return f"/static/uploads/{filename}"


def verify_admin_key(admin_key: str):
    """Admin passcode verification helper."""
    if admin_key != ADMIN_SECRET_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Admin Passcode. Action not permitted."
        )


# --- PUBLIC ROUTES ---

@router.get("", response_model=List[ProjectResponse])
@router.get("/", response_model=List[ProjectResponse])
def get_all_projects(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(Project)
    if category:
        query = query.filter(Project.category == category)
    return query.all()


@router.get("/{project_id}", response_model=ProjectResponse)
def get_project_by_id(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


# --- ADMIN-ONLY ROUTES ---

@router.post("", response_model=ProjectResponse, status_code=status.HTTP_201_CREATED)
@router.post("/", response_model=ProjectResponse, status_code=status.HTTP_201_CREATED)
async def create_project(
    admin_key: str = Form(...),
    title: str = Form(...),
    description: str = Form(...),
    category: str = Form(...),
    technologies: str = Form(...),
    github_url: Optional[str] = Form(None),
    live_url: Optional[str] = Form(None),
    image: Optional[UploadFile] = File(None),
    screenshots: List[UploadFile] = File(default=[]),
    db: Session = Depends(get_db)
):
    verify_admin_key(admin_key)

    try:
        parsed_tech = json.loads(technologies) if isinstance(technologies, str) else technologies
        tech_list = [str(item).strip() for item in parsed_tech if item] if isinstance(parsed_tech, list) else [t.strip() for t in str(technologies).split(",") if t.strip()]
    except (json.JSONDecodeError, TypeError):
        tech_list = [t.strip() for t in str(technologies).split(",") if t.strip()]

    image_url = save_file(image) if image and image.filename else None
    screenshot_urls = [save_file(shot) for shot in screenshots if shot and shot.filename]

    db_project = Project(
        title=title,
        description=description,
        category=category,
        technologies=tech_list,
        github_url=github_url,
        live_url=live_url,
        image_url=image_url,
        screenshots=screenshot_urls
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


@router.put("/{project_id}", response_model=ProjectResponse)
async def update_project(
    project_id: int,
    admin_key: str = Form(...),
    title: str = Form(...),
    description: str = Form(...),
    category: str = Form(...),
    technologies: str = Form(...),
    github_url: Optional[str] = Form(None),
    live_url: Optional[str] = Form(None),
    image: Optional[UploadFile] = File(None),
    screenshots: List[UploadFile] = File(default=[]),
    db: Session = Depends(get_db)
):
    verify_admin_key(admin_key)

    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    try:
        parsed_tech = json.loads(technologies) if isinstance(technologies, str) else technologies
        tech_list = [str(item).strip() for item in parsed_tech if item] if isinstance(parsed_tech, list) else [t.strip() for t in str(technologies).split(",") if t.strip()]
    except (json.JSONDecodeError, TypeError):
        tech_list = [t.strip() for t in str(technologies).split(",") if t.strip()]

    project.title = title
    project.description = description
    project.category = category
    project.technologies = tech_list
    project.github_url = github_url
    project.live_url = live_url

    if image and image.filename:
        project.image_url = save_file(image)

    valid_screenshots = [shot for shot in screenshots if shot and shot.filename]
    if valid_screenshots:
        project.screenshots = [save_file(shot) for shot in valid_screenshots]

    db.commit()
    db.refresh(project)
    return project


@router.delete("/{project_id}", status_code=status.HTTP_200_OK)
def delete_project(
    project_id: int,
    admin_key: str = Form(...),
    db: Session = Depends(get_db)
):
    verify_admin_key(admin_key)

    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()
    return {"message": f"Project with ID {project_id} deleted successfully."}