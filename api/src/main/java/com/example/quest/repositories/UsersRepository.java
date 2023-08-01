package com.example.quest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quest.models.User;

public interface UsersRepository extends JpaRepository<User,Long> {
    
}
