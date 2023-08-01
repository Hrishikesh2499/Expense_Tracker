from sqlalchemy import Column, Integer, Date, ForeignKey, String
from sqlalchemy.orm import relationship
from api.database.database import Base


class Expense(Base):
    __tablename__ = "expense"
    id = Column(Integer, primary_key=True, index=True)
    expense_amount = Column(Integer, index=True, name="expenseAmount")
    expense_description = Column(String, index=True, name="expenseDescription")
    expense_date = Column(Date, index=True, name="expenseDate")
    expense_type_id = Column(Integer, ForeignKey(
        "expense_type.id"), name="expenseTypeId")
    expense_category_id = Column(Integer, ForeignKey(
        "expense_category.id"), name="expenseCategoryId")
    expense_type = relationship(
        "ExpenseType", back_populates="expenses", uselist=False)
    expense_category = relationship(
        "ExpenseCategory", back_populates="expenses", uselist=False)
