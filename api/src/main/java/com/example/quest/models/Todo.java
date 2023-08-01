package com.example.quest.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todo")
public  class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String todo;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTodo() {
        return todo;
    }
    public void setTodo(String todo) {
        this.todo = todo;
    }
    @Override
    public String toString() {
        return "Todo [id=" + id + ", todo=" + todo + "]";
    }

    
}
