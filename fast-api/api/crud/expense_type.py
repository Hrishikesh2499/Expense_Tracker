# from api.schemas import expense_type as expense_type_schema
from api.models.expense_type import ExpenseType
from api.schemas.expense_type import ExpenseType as ExpenseTypeSchema

from api.database.database import SessionLocal

db = SessionLocal()


def get_expense_types():
    return db.query(ExpenseType).all()


async def create_expense_type(payload: ExpenseTypeSchema):
    db_expense_type = ExpenseType(name=payload.name)
    db_expense_type.description = payload.description
    db.add(db_expense_type)
    db.commit()
    return True


async def update_expense_type(payload: ExpenseTypeSchema):
    db.query(ExpenseType).filter(ExpenseType.id ==
                                 payload.id).update(payload.dict())
    db.commit()
    return True


async def delete_expense_type(id: int):
    db.query(ExpenseType).filter(ExpenseType.id == id).delete()
    db.commit()
    return True
