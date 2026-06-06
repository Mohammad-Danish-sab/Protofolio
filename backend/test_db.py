from app.database import engine

try:
    conn = engine.connect()
    print(" Connected to NeonDB Successfully!")
    conn.close()
except Exception as e:
    print(e)