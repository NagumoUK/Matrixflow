from fastapi import APIRouter

from app.api.routes.auth import router as auth_router
from app.api.routes.companies import router as companies_router
from app.api.routes.matrices import router as matrices_router
from app.api.routes.operations import router as operations_router
from app.api.routes.reports import router as reports_router
from app.api.routes.vectors import router as vectors_router

api_router = APIRouter()
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(companies_router, prefix="/companies", tags=["companies"])
api_router.include_router(vectors_router, prefix="/vectors", tags=["vectors"])
api_router.include_router(matrices_router, prefix="/matrices", tags=["matrices"])
api_router.include_router(operations_router, prefix="/operations", tags=["operations"])
api_router.include_router(reports_router, prefix="/reports", tags=["reports"])
