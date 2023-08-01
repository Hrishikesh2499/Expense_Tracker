package com.example.quest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.quest.Dto.AddUserDto;
import com.example.quest.models.User;
import com.example.quest.repositories.UsersRepository;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    public List<User> getUsers() {
        Sort sort = Sort.by("id").ascending();
        return usersRepository.findAll(sort);

    }

    public List<User> addUser(AddUserDto payload) {
        User User = new User();
        User.setBeta(payload.getBeta());
        User.setEmail(payload.getEmail());
        User.setExpires(payload.getExpires());

        usersRepository.save(User);
        return getUsers();

    }

    public List<User> updateUser(User payload) {
        usersRepository.save(payload);
        return getUsers();

    }

    public List<User> deleteUser(Long id) {
        usersRepository.deleteById(id);
        return getUsers();

    }
}
