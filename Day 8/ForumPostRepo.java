package com.example.backend.demo.repository;



import com.example.backend.demo.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumPostRepo extends JpaRepository<ForumPost, Long> {
}
