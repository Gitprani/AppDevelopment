package com.example.backend.demo.service;


import com.example.backend.demo.model.User;
import com.example.backend.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User create(User user) {
        if (user != null) {
            return userRepo.save(user);
        } else {
            throw new IllegalArgumentException("User object cannot be null");
        }
    }

    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    public User getUserById(int id) {
        return userRepo.findById(id).orElse(null);
    }

    public boolean updateUser(int id, User user) {
        if (getUserById(id) == null)
            return false;

        if (user != null) {
            user.setId(id); // Ensure the ID is set for the correct entity
            userRepo.save(user);
        } else {
            throw new IllegalArgumentException("No order with the given ID found");
        }

        return true;
    }

    public boolean deleteUser(int id) {
        if (getUserById(id) == null)
            return false;

        userRepo.deleteById(id);

        return true;
    }
}
