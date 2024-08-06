package com.example.backend.demo.service;


import com.example.backend.demo.model.ForumPost;
import com.example.backend.demo.repository.ForumPostRepo;
import com.example.backend.demo.config.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ForumPostService {

    @Autowired
    private ForumPostRepo repository;

    public List<ForumPost> getAllPosts() {
        return repository.findAll();
    }

    public ForumPost getPostById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ForumPost not found with id " + id));
    }

    public ForumPost savePost(ForumPost post) {
        post.setCreatedAt(LocalDateTime.now());
        return repository.save(post);
    }

    public ForumPost updatePost(Long id, ForumPost postDetails) {
        ForumPost post = getPostById(id);
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());
        post.setUserId(postDetails.getUserId());
        return repository.save(post);
    }

    public void deletePost(Long id) {
        repository.deleteById(id);
    }
}
