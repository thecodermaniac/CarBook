from pydantic import BaseModel
from typing import Optional

class Car(BaseModel):
    name: str
    carType: str
    capacity: int
    pricePerDay: float

    class Config:
        orm_mode = True
