package com.example.quest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quest.models.ExpenseType;

public interface ExpenseTypeRepository extends JpaRepository<ExpenseType, Long> {

}
