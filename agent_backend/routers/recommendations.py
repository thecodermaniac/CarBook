from fastapi import APIRouter, HTTPException, Body
from services.database import car_collection
from services.llm_service import generate_query
from controllers.getCarType import extract_car_types
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    user_id: str  # Unique identifier for the session
    question: str


@router.post("/recommend")
# async def recommend_car(user_query = Body(...)):
async def recommend_car(request: ChatRequest):
    query=request.question
    llm_response = generate_query(str(query),str(request.user_id))
    car_array = extract_car_types(str(llm_response))
    print("LLM response:", car_array)

    # cars_cursor = app.mongodb.find({"type": {"$in": car_types}})
    # cars = await cars_cursor.to_list(length=100)
    
    cars = await car_collection.find({
            "$expr": {
                "$in": [
                    {"$toLower": "$carType"},  # Convert field to lowercase
                    car_array                # Compare against lowercase input array
                ]
            }
        },{"_id": 0}).to_list(length=5)
    print("Cars found:", cars)
    # if not cars:
    #     raise HTTPException(status_code=404, detail="No cars found for the given query.")

    return {"query": query, "suggested_cars": cars}

