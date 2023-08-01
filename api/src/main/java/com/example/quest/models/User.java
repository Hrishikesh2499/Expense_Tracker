package com.example.quest.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "data_manager")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean admin;
    private Long authcode;
    private Timestamp created;
    private String email;
    private Timestamp emailed;
    private Boolean revoked;
    private Boolean beta;
    private Timestamp expires;

    public Boolean getBeta() {
        return beta;
    }

    public void setBeta(Boolean beta) {
        this.beta = beta;
    }

    public Timestamp getExpires() {
        return expires;
    }

    public void setExpires(Timestamp expires) {
        this.expires = expires;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Long getAuthcode() {
        return authcode;
    }

    public void setAuthcode(Long authcode) {
        this.authcode = authcode;
    }

    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getEmailed() {
        return emailed;
    }

    public void setEmailed(Timestamp emailed) {
        this.emailed = emailed;
    }

    public Boolean getRevoked() {
        return revoked;
    }

    public void setRevoked(Boolean revoked) {
        this.revoked = revoked;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", admin=" + admin + ", authcode=" + authcode + ", created=" + created
                + ", email=" + email + ", emailed=" + emailed + ", revoked=" + revoked + "]";
    }
}
