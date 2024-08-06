package com.example.backend.demo.controller;


import com.example.backend.demo.model.ForumPost;
import com.example.backend.demo.service.ForumPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forum-posts")
public class ForumPostController {

    @Autowired
    private ForumPostService service;

    @GetMapping
    public List<ForumPost> getAllPosts() {
        return service.getAllPosts();
    }

    @GetMapping("/{id}")
    public ForumPost getPostById(@PathVariable Long id) {
        return service.getPostById(id);
    }

    @PostMapping
    public ForumPost createPost(@RequestBody ForumPost post) {
        return service.savePost(post);
    }

    @PutMapping("/{id}")
    public ForumPost updatePost(@PathVariable Long id, @RequestBody ForumPost postDetails) {
        return service.updatePost(id, postDetails);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        service.deletePost(id);
    }
}
