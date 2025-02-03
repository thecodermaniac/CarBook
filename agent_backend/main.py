from fastapi import FastAPI
from routers import recommendations
from routers import testRouter

app = FastAPI(title="Car Recommendation API")



@app.get("/")
async def root():
    return {"message": "Welcome to Car Recommendation API"}


# Include routes
app.include_router(recommendations.router)
app.include_router(testRouter.router)