package com.example.backend.demo.repository;



import com.example.backend.demo.model.MaintenanceSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MaintenanceScheduleRepo extends JpaRepository<MaintenanceSchedule, Long> {
}
