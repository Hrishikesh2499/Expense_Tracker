from fastapi import APIRouter
from api.schemas.expense import ExpenseCreate, Expense
from api.schemas.response import Response
from api.crud.expense import get_expenses, create_expense, update_expense, delete_expense

expense = APIRouter()

@expense.get("/", response_model=Response)
async def get_expense_route():
    try:
        expense_categories = get_expenses()
        return {"data": expense_categories, "status": 200, "message": "Expenses Retrieved Successfullly."}
    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense.post("/", response_model=Response)
async def create_expense_route(payload: ExpenseCreate):
    try:
        await create_expense(payload)
        data = get_expenses()
        return {"data": data, "status": 200, "message": "Expense Created Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense.put("/", response_model=Response)
async def update_expense_route(payload: Expense):
    try:
        await update_expense(payload)
        data = get_expenses()
        return {"data": data, "status": 200, "message": "Expense Updated Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense.delete("/{id}", response_model=Response)
async def delete_expense_route(id: int):
    try:
        await delete_expense(id)
        data = get_expenses()
        return {"data": data, "status": 200, "message": "Expense Deleted Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response
