import os
import uuid
import shutil

from fastapi import UploadFile

UPLOAD_DIR = "app/uploads/projects"

os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_image(image: UploadFile | None):

    if image is None:
        return None

    ext = image.filename.split(".")[-1]

    filename = f"{uuid.uuid4()}.{ext}"

    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    return f"/uploads/projects/{filename}"