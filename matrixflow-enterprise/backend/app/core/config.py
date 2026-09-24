from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "MatrixFlow Enterprise API"
    api_prefix: str = "/api/v1"
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
