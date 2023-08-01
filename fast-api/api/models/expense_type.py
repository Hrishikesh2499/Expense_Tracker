from sqlalchemy import Column, Integer, String
from api.database.database import Base
from sqlalchemy.orm import relationship

class ExpenseType(Base):
    __tablename__ = "expense_type"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    expenses = relationship("Expense", back_populates="expense_type",uselist=False)

