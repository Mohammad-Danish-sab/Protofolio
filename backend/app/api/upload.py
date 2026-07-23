from fastapi import APIRouter

from fastapi import UploadFile

from fastapi import File

from app.utils.cloudinary import upload_image

router = APIRouter(

    prefix="/upload",

    tags=["Upload"]

)


@router.post("/image")
async def upload(file: UploadFile = File(...)):

    url = upload_image(file.file)

    return {

        "url": url

    }