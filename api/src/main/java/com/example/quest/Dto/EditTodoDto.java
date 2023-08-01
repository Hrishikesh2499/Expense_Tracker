package com.example.quest.Dto;

public class EditTodoDto {
    private Long todoId;
    private String propertyKey ;
    private Object propertyValue;
    public Long getTodoId() {
        return todoId;
    }
    public void setTodoId(Long todoId) {
        this.todoId = todoId;
    }
    public String getPropertyKey() {
        return propertyKey;
    }
    public void setPropertyKey(String propertyKey) {
        this.propertyKey = propertyKey;
    }
    @Override
    public String toString() {
        return "EditTodoDto [todoId=" + todoId + ", propertyKey=" + propertyKey + ", propertyValue=" + propertyValue
                + "]";
    }
    public Object getPropertyValue() {
        return propertyValue;
    }
    public void setPropertyValue(Object propertyValue) {
        this.propertyValue = propertyValue;
    }

    
}
