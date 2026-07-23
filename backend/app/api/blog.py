from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from fastapi import HTTPException
from app.schemas.blog import BlogUpdate

from app.core.database import get_db

from app.models.blog import Blog

from app.schemas.blog import (
    BlogCreate,
    BlogResponse
)

router = APIRouter(
    prefix="/blogs",
    tags=["Blogs"]
)


@router.post(
    "/",
    response_model=BlogResponse
)
def create_blog(
    data: BlogCreate,
    db: Session = Depends(get_db)
):

    blog = Blog(**data.model_dump())

    db.add(blog)

    db.commit()

    db.refresh(blog)

    return blog

@router.get(
    "/",
    response_model=list[BlogResponse]
)
def get_blogs(
    db: Session = Depends(get_db)
):
    return (
        db.query(Blog)
        .order_by(Blog.created_at.desc())
        .all()
    )

@router.get(
    "/{slug}",
    response_model=BlogResponse
)
def get_blog(
    slug: str,
    db: Session = Depends(get_db)
):

    return (
        db.query(Blog)
        .filter(Blog.slug == slug)
        .first()
    )


@router.put(
    "/{blog_id}",
    response_model=BlogResponse
)
def update_blog(
    blog_id: int,
    data: BlogUpdate,
    db: Session = Depends(get_db)
):
    blog = (
        db.query(Blog)
        .filter(Blog.id == blog_id)
        .first()
    )

    if not blog:
        raise HTTPException(
            status_code=404,
            detail="Blog not found"
        )

    for key, value in data.model_dump().items():
        setattr(blog, key, value)

    db.commit()
    db.refresh(blog)

    return blog


@router.delete("/{blog_id}")
def delete_blog(
    blog_id: int,
    db: Session = Depends(get_db)
):
    blog = (
        db.query(Blog)
        .filter(Blog.id == blog_id)
        .first()
    )

    if not blog:
        raise HTTPException(
            status_code=404,
            detail="Blog not found"
        )

    db.delete(blog)
    db.commit()

    return {
        "message": "Blog deleted successfully"
    }

@router.get(
    "/featured/list",
    response_model=list[BlogResponse]
)
def featured_blogs(
    db: Session = Depends(get_db)
):
    return (
        db.query(Blog)
        .filter(Blog.featured == True)
        .filter(Blog.published == True)
        .order_by(Blog.created_at.desc())
        .all()
    )

@router.get(
    "/latest/list",
    response_model=list[BlogResponse]
)
def latest_blogs(
    db: Session = Depends(get_db)
):
    return (
        db.query(Blog)
        .filter(Blog.published == True)
        .order_by(Blog.created_at.desc())
        .limit(6)
        .all()
    )

@router.get(
    "/category/{category}",
    response_model=list[BlogResponse]
)
def blogs_by_category(
    category: str,
    db: Session = Depends(get_db)
):
    return (
        db.query(Blog)
        .filter(Blog.category == category)
        .filter(Blog.published == True)
        .all()
    )

