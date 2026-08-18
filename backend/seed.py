from app.core.database import SessionLocal
from app.models.project import Project  # Adjust import if your model path differs

def seed_projects():
    db = SessionLocal()
    
    # Check if database is empty
    if db.query(Project).count() > 0:
        print("Projects already exist in the database.")
        db.close()
        return

    sample_projects = [
        Project(
            title="EduBrain AI",
            description="Personal education engine and learning management prototype.",
            category="AI / ML",
            technologies=["Python", "FastAPI", "React", "PostgreSQL"],
            github_url="https://github.com/yourusername/edubrain",
            live_url="https://edubrain.example.com",
            image_url="https://via.placeholder.com/600x400"
        ),
        Project(
            title="Portfolio Website",
            description="Modern developer portfolio built with React Vite, Tailwind CSS, and FastAPI.",
            category="Full Stack",
            technologies=["React", "Tailwind CSS", "FastAPI", "PostgreSQL"],
            github_url="https://github.com/yourusername/portfolio",
            live_url="http://localhost:5173",
            image_url="https://via.placeholder.com/600x400"
        )
    ]

    db.add_all(sample_projects)
    db.commit()
    print("Successfully uploaded projects!")
    db.close()

if __name__ == "__main__":
    seed_projects()