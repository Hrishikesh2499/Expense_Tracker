from fastapi import APIRouter
from api.schemas.expense_category import ExpenseCategoryCreate, ExpenseCategory
from api.schemas.response import Response
from api.crud.expense_category import get_expense_categories, create_expense_category, update_expense_category, delete_expense_category
expense_category = APIRouter()


@expense_category.get("/", response_model=Response)
async def get_expense_manager_route():
    try:
        expense_categories = get_expense_categories()
        return {"data": expense_categories, "status": 200, "message": "Expense Categories Retrieved Successfullly."}
    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_category.post("/", response_model=Response)
async def create_expense_category_route(payload: ExpenseCategoryCreate):
    try:
        await create_expense_category(payload)
        data = get_expense_categories()
        return {"data": data, "status": 200, "message": "Expense Category Created Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_category.put("/", response_model=Response)
async def update_expense_category_route(payload: ExpenseCategory):
    try:
        await update_expense_category(payload)
        data = get_expense_categories()
        return {"data": data, "status": 200, "message": "Expense Category Updated Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_category.delete("/{id}", response_model=Response)
async def delete_expense_category_route(id:int):
    try:
        await delete_expense_category(id)
        data = get_expense_categories()
        return {"data": data, "status": 200, "message": "Expense Category Deleted Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response
