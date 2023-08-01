package com.example.quest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.quest.Dto.AddUserDto;
import com.example.quest.Dto.ResponseDto;
import com.example.quest.models.User;
import com.example.quest.services.UsersService;

@RestController
@RequestMapping("users")
@CrossOrigin("*")
public class UsersController {
    @Autowired
    UsersService usersService;

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(usersService.getUsers());
            response.setMessage("Users Retrieved Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

    @PostMapping("/")
    public ResponseEntity<?> addNewData(@RequestBody AddUserDto payload) {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(usersService.addUser(payload));
            response.setMessage("User Added Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

    @PutMapping("/")
    public ResponseEntity<?> updateUser(@RequestBody User payload) {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(usersService.updateUser(payload));
            response.setMessage("User Updated Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

    @DeleteMapping("/")
    public ResponseEntity<?> deleteUser(@RequestParam Long id) {
        try {
            ResponseDto response = new ResponseDto();
            response.setData(usersService.deleteUser(id));
            response.setMessage("User Deleted Successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);

        }
    }

}
