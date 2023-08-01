from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers from the API endpoints
from api.routers import expense_type_routers, expense_category_routers, expense
from api.database.database import engine, Base

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(expense_type_routers.expense_type, prefix="/expense-type")
app.include_router(expense_category_routers.expense_category,
                   prefix="/expense-category")
app.include_router(expense.expense,
                   prefix="/expense")
