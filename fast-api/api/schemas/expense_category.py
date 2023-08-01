from pydantic import BaseModel


class ExpenseCategoryBase(BaseModel):
    name: str
    description: str | None = None


class ExpenseCategoryCreate(ExpenseCategoryBase):
    pass


class ExpenseCategory(ExpenseCategoryBase):
    id: int
    class Config:
        orm_mode = True
