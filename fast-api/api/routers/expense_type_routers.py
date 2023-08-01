from fastapi import APIRouter
from api.schemas.expense_type import ExpenseTypeCreate, ExpenseType
from api.schemas.response import Response
from api.crud.expense_type import get_expense_types, create_expense_type, update_expense_type, delete_expense_type
expense_type = APIRouter()


@expense_type.get("/", response_model=Response)
async def get_expense_manager_route():
    try:
        expense_types = get_expense_types()
        return {"data": expense_types, "status": 200, "message": "Expense Types Retrieved Successfullly."}
    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_type.post("/", response_model=Response)
async def create_expense_type_route(payload: ExpenseTypeCreate):
    try:
        await create_expense_type(payload)
        data = get_expense_types()
        return {"data": data, "status": 200, "message": "Expense Types Created Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_type.put("/", response_model=Response)
async def update_expense_type_route(payload: ExpenseType):
    try:
        await update_expense_type(payload)
        data = get_expense_types()
        return {"data": data, "status": 200, "message": "Expense Types Updated Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response


@expense_type.delete("/{id}", response_model=Response)
async def delete_expense_type_route(id:int):
    try:
        await delete_expense_type(id)
        data = get_expense_types()
        return {"data": data, "status": 200, "message": "Expense Types Deleted Successfullly."}

    except Exception as error:
        response = Response(
            data=[],
            message=repr(error),
            status=500
        )
        return response
