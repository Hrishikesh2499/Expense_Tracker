# from api.schemas import expense as expense_schema
from api.models.expense import Expense
from api.schemas.expense import Expense as ExpenseSchema
from sqlalchemy.orm import joinedload,subqueryload
from api.database.database import SessionLocal

db = SessionLocal()


def get_expenses():
    expenses = db.query(Expense).options(subqueryload(Expense.expense_category), subqueryload(Expense.expense_type)).all()
    return expenses


async def create_expense(payload: ExpenseSchema):
    expense = Expense(
        expense_amount=payload.expenseAmount,
        expense_description=payload.expenseDescription,
        expense_date=payload.expenseDate,
        expense_type_id=payload.expenseType.id,
        expense_category_id=payload.expenseCategory.id
    )
    db.add(expense)
    db.commit()
    return True


async def update_expense(payload: ExpenseSchema):
    return True


async def delete_expense(id: int):
    db.query(Expense).filter(Expense.id==id).delete()
    return True
