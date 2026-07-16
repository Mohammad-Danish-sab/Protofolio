from fastapi import APIRouter, Depends
from app.core.dependencies import get_current_admin

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def get_stats(
    admin: str = Depends(get_current_admin)
):
    return {
        "projects": 20,
        "messages": 12,
        "skills": 15,
        "services": 6
    }