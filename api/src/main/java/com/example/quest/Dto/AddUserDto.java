package com.example.quest.Dto;

import java.sql.Timestamp;

public class AddUserDto {

    private String email;

    private Timestamp expires;
    private Boolean beta;

    public Timestamp getExpires() {
        return expires;
    }

    public void setExpires(Timestamp expires) {
        this.expires = expires;
    }

    public Boolean getBeta() {
        return beta;
    }

    public void setBeta(Boolean beta) {
        this.beta = beta;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
