package com.example.quest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quest.models.ExpenseType;
import com.example.quest.responses.ResponseHandler;
import com.example.quest.services.ExpenseTypeService;

@RestController
@RequestMapping("/expense-type")
@CrossOrigin("*")
public class ExpenseTypeController {
    @Autowired
    ExpenseTypeService expenseTypeService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllExpenseType() {
        try {
            return ResponseHandler.generateResponse("Expense Types retrieved successfully.", HttpStatus.OK,
                    expenseTypeService.getAllExpenseType());
        } catch (Exception e) {
            return ResponseHandler.generateErrorResponse(e);
        }
    }

    @PutMapping("/")
    public ResponseEntity<Object> updateExpenseType(@RequestBody ExpenseType payload) {
        try {
            return ResponseHandler.generateResponse("Expense Types updated successfully.", HttpStatus.OK,
                    expenseTypeService.updateExpenseType(payload));
        } catch (Exception e) {
            return ResponseHandler.generateErrorResponse(e);
        }
    }

    @PostMapping("/")
    public ResponseEntity<Object> createExpenseType(@RequestBody ExpenseType payload) {
        try {
            return ResponseHandler.generateResponse("Expense Types created successfully.", HttpStatus.OK,
                    expenseTypeService.createExpenseType(payload));
        } catch (Exception e) {
            return ResponseHandler.generateErrorResponse(e);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteExpenseType(@PathVariable(value = "id", required = true) Long id) {
        try {
            return ResponseHandler.generateResponse("Expense Types deleted successfully.", HttpStatus.OK,
                    expenseTypeService.deleteExpenseType(id));
        } catch (Exception e) {
            return ResponseHandler.generateErrorResponse(e);
        }
    }
}
