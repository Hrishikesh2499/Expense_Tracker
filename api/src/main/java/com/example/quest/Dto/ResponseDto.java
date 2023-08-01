package com.example.quest.Dto;

public class ResponseDto {
    private Object data;
    private String message;
    public Object getUsers() {
        return data;
    }
    public void setData(Object data) {
        this.data = data;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
