package com.example.quest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.quest.Dto.EditTodoDto;
import com.example.quest.Dto.TodoDto;
import com.example.quest.models.Todo;
import com.example.quest.repositories.TodoRepository;

@Service
public class TodoService {
    @Autowired
    TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long todoId) {
        Optional<Todo> resTodo = todoRepository.findById(todoId);

        return resTodo;

    }

    @Transactional
    public List<Todo> createNewTodo(TodoDto todo) {
        Todo todoObj = new Todo();
        todoObj.setTodo(todo.getTodo());
        if (todoRepository.save(todoObj).getId() > 0) {
            return todoRepository.findAll();
        }
        return null;
    }

    public List<Todo> deleteTodo(Long id) {
        todoRepository.deleteById(id);
        return todoRepository.findAll();

    }

    @Transactional
    public List<Todo> editTodo(Long todoId, List<EditTodoDto> editTodoDtos) {
        Todo todoObj = new Todo();
        for (EditTodoDto editTodoDto : editTodoDtos) {
            if (editTodoDto.getPropertyKey() == null ||
                    editTodoDto.getPropertyValue() == null) {
                return null;
            }
            todoObj.setId(todoId);
            switch (editTodoDto.getPropertyKey()) {
                case "todo":
                    todoObj.setTodo(String.valueOf(editTodoDto.getPropertyValue()));
                    break;
            }
            todoRepository.save(todoObj);

        }
        return todoRepository.findAll();
    }

}
