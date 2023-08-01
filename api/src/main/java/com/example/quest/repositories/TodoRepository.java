package com.example.quest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quest.models.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
