from sqlalchemy import Column, Integer, String
from api.database.database import Base
from sqlalchemy.orm import relationship


class ExpenseCategory(Base):
    __tablename__ = "expense_category"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    expenses = relationship(
        "Expense", back_populates="expense_category", uselist=False)
