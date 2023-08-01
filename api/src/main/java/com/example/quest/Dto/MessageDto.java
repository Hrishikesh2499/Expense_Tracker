package com.example.quest.Dto;

public class MessageDto {
    private String message;
    private String name;

    public String getMessage() {
        return message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MessageDto setMessage(String message) {
        this.message = message;
        return null;
    }
}
