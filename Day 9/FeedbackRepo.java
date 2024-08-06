package com.example.backend.demo.repository;


import com.example.backend.demo.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository<Feedback, Long> {
}
