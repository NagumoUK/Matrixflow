from fastapi import APIRouter, status

from app.repositories.memory import store
from app.schemas.company import Company, CompanyCreate

router = APIRouter()


@router.get("", response_model=list[Company])
def list_companies() -> list[dict]:
    return store.companies


@router.post("", response_model=Company, status_code=status.HTTP_201_CREATED)
def create_company(payload: CompanyCreate) -> dict:
    return store.add("companies", payload.model_dump())
