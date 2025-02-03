from fastapi import FastAPI
from routers import recommendations
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Car Recommendation API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
async def root():
    return {"message": "Welcome to Car Recommendation API"}


# Include routes
app.include_router(recommendations.router)