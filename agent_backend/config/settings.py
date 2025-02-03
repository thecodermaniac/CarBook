from pydantic_settings import BaseSettings
from dotenv import load_dotenv
load_dotenv()

class Settings(BaseSettings):
    MONGO_URI: str
    HF_MODEL: str
    HF_API_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()
