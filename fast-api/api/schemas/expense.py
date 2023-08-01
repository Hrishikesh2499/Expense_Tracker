from pydantic import BaseModel
from api.schemas.expense_category import ExpenseCategory
from api.schemas.expense_type import ExpenseType
import datetime

class ExpenseBase(BaseModel):
    expenseDescription: str
    expenseDate: datetime.date
    expenseAmount: int
    expenseType: ExpenseType
    expenseCategory: ExpenseCategory


class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: int
