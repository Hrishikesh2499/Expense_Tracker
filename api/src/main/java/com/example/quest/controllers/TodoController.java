package com.example.quest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.quest.Dto.EditTodoDto;
import com.example.quest.Dto.TodoDto;
import com.example.quest.responses.ResponseHandler;
import com.example.quest.services.TodoService;

@RestController
@RequestMapping("/todo")
@CrossOrigin("*")
public class TodoController {
    @Autowired
    TodoService todoService;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @GetMapping("/")
    public ResponseEntity<Object> getAllTodos() {
        try {
           ResponseEntity<Object> res= ResponseHandler.generateResponse("Data retrieved successfully", HttpStatus.OK,
                    todoService.getAllTodos());
            simpMessagingTemplate.convertAndSend("/topic/messages", res);
            return ResponseHandler.generateResponse("Data retrieved successfully", HttpStatus.OK,
                    todoService.getAllTodos());
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
        }
    }

    @PostMapping("/")
    public ResponseEntity<Object> addNewTodo(TodoDto todo) {
        try {
            return ResponseHandler.generateResponse("Todo created successfully", HttpStatus.OK,
                    todoService.createNewTodo(todo));

        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);

        }
    }

    @DeleteMapping("/")
    public ResponseEntity<Object> deleteTodo(@RequestParam String id) {
        try {
            return ResponseHandler.generateResponse("Todo deleted successfully", HttpStatus.OK,
                    todoService.deleteTodo(Long.parseLong(id)));
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);

        }

    }

    @PutMapping("/{todoId}")
    public ResponseEntity<Object> updateTodo(@PathVariable(value = "todoId", required = true) long todoId,
            @RequestBody List<EditTodoDto> editTodoDtos) {

        try {
            System.out.println(todoId);
            ResponseEntity<Object> res= ResponseHandler.generateResponse("Data retrieved successfully", HttpStatus.OK,
                    todoService.editTodo(todoId,editTodoDtos));
            simpMessagingTemplate.convertAndSend("/topic/messages",res);
            return res;
        } catch (Exception e) {

            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);

        }

    }

    @GetMapping("/{todoId}")
    public ResponseEntity<Object> getTodoById(@PathVariable(value = "todoId",required = true) long todoId) {
        try {
           ResponseEntity<Object> res= ResponseHandler.generateResponse("Data retrieved successfully", HttpStatus.OK,
                    todoService.getTodoById(todoId));
            simpMessagingTemplate.convertAndSend("/topic/messages/"+todoId, res);
            return res;
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null);
        }
    }
}
