package com.example.quest.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.quest.models.ExpenseType;
import com.example.quest.repositories.ExpenseTypeRepository;

@Service
public class ExpenseTypeService {
    @Autowired
    public ExpenseTypeRepository expenseTypeRepo;

    public List<ExpenseType> getAllExpenseType() {
        return expenseTypeRepo.findAll();
    }

    public List<ExpenseType> updateExpenseType(ExpenseType payload) {
        expenseTypeRepo.save(payload);
        return getAllExpenseType();
    }

    public List<ExpenseType> createExpenseType(ExpenseType payload) {
        expenseTypeRepo.save(payload);
        return getAllExpenseType();
    }

    public List<ExpenseType> deleteExpenseType(Long id) {
        expenseTypeRepo.deleteById(id);
        return getAllExpenseType();
    }
}
