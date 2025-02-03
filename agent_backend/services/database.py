from motor.motor_asyncio import AsyncIOMotorClient
from config.settings import settings

client = AsyncIOMotorClient(settings.MONGO_URI)
db = client["CarBook"]
car_collection = db["cars"]
