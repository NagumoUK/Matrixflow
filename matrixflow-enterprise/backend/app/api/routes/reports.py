from fastapi import APIRouter

from app.repositories.memory import store

router = APIRouter()


@router.get("")
def get_report() -> dict:
    return {
        "sales": {"current": 284920, "change_percent": 12.8},
        "inventory": {"valued": 1200000, "change_percent": -2.1},
        "operations": {"completed": len(store.operations)},
        "companies": len(store.companies),
        "vectors": len(store.vectors),
        "matrices": len(store.matrices),
    }
