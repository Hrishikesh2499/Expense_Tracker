from pydantic import BaseModel


class ExpenseTypeBase(BaseModel):
    name: str
    description: str | None = None


class ExpenseTypeCreate(ExpenseTypeBase):
    pass


class ExpenseType(ExpenseTypeBase):
    id: int
    class Config:
        orm_mode = True
