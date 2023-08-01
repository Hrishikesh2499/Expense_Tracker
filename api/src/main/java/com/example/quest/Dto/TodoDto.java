package com.example.quest.Dto;

public class TodoDto {
    private String todo;

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    @Override
    public String toString() {
        return "TodoDto [todo=" + todo + "]";
    }

}
