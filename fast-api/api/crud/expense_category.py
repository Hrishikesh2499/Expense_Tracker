# from api.schemas import expense_category as expense_category_schema
from api.models.expense_category import ExpenseCategory
from api.schemas.expense_category import ExpenseCategory as ExpenseCategorySchema

from api.database.database import SessionLocal

db = SessionLocal()


def get_expense_categories():
    return db.query(ExpenseCategory).all()

async def create_expense_category(payload: ExpenseCategorySchema):
    db_expense_category = ExpenseCategory(name=payload.name)
    db_expense_category.description = payload.description
    db.add(db_expense_category)
    db.commit()
    return True


async def update_expense_category(payload: ExpenseCategorySchema):
    db.query(ExpenseCategory).filter(ExpenseCategory.id ==
                                 payload.id).update(payload.dict())
    db.commit()
    return True


async def delete_expense_category(id: int):
    db.query(ExpenseCategory).filter(ExpenseCategory.id == id).delete()
    db.commit()
    return True
