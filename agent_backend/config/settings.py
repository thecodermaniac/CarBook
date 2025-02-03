from pydantic_settings import BaseSettings
from dotenv import load_dotenv
load_dotenv()

class Settings(BaseSettings):
    MONGO_URI: str
    HF_MODEL: str = "meta-llama/Meta-Llama-3-8B"
    HF_API_KEY: str = "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"

    class Config:
        env_file = ".env"

settings = Settings()
