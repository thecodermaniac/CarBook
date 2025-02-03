
from fastapi import APIRouter, HTTPException, Body

router = APIRouter()

@router.post("/testing/post")
async def test_post(test_query = Body(...)):
    print("Test query:", test_query)
    return {"message": "This is a POST request"}
