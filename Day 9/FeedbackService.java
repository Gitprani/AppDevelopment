package com.example.backend.demo.service;



import com.example.backend.demo.model.Feedback;
import com.example.backend.demo.repository.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public List<Feedback> getAllFeedback() {
        return feedbackRepo.findAll();
    }

    public Feedback getFeedbackById(Long id) {
        return feedbackRepo.findById(id).orElse(null);
    }

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public Feedback updateFeedback(Long id, Feedback feedback) {
        Feedback existingFeedback = feedbackRepo.findById(id).orElse(null);
        if (existingFeedback != null) {
            existingFeedback.setFeedbackText(feedback.getFeedbackText());
            existingFeedback.setUserName(feedback.getUserName());
            existingFeedback.setRating(feedback.getRating());
            return feedbackRepo.save(existingFeedback);
        }
        return null;
    }

    public void deleteFeedback(Long id) {
        feedbackRepo.deleteById(id);
    }
}