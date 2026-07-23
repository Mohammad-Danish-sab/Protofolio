from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_admin

from app.models.project import Project
from app.schemas.project import (
    ProjectCreate,
    ProjectResponse,
)

router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
)


# ==========================
# Public - Get All Projects
# ==========================
@router.get(
    "/",
    response_model=list[ProjectResponse],
)
def get_projects(
    db: Session = Depends(get_db),
):
    return db.query(Project).all()


# ==========================
# Admin - Create Project
# ==========================
@router.post(
    "/",
    response_model=ProjectResponse,
)
def create_project(
    data: ProjectCreate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    project = Project(**data.model_dump())

    db.add(project)
    db.commit()
    db.refresh(project)

    return project


# ==========================
# Admin - Update Project
# ==========================
@router.put(
    "/{project_id}",
    response_model=ProjectResponse,
)
def update_project(
    project_id: int,
    data: ProjectCreate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    for key, value in data.model_dump().items():
        setattr(project, key, value)

    db.commit()
    db.refresh(project)

    return project


# ==========================
# Admin - Delete Project
# ==========================
@router.delete(
    "/{project_id}",
)
def delete_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    project = (
        db.query(Project)
        .filter(Project.id == project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    db.delete(project)
    db.commit()

    return {
        "message": "Project deleted successfully"
    }