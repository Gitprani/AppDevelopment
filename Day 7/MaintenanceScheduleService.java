package com.example.backend.demo.service;



import com.example.backend.demo.model.MaintenanceSchedule;
import com.example.backend.demo.repository.MaintenanceScheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaintenanceScheduleService {

    @Autowired
    private MaintenanceScheduleRepo repository;

    public List<MaintenanceSchedule> getAllSchedules() {
        return repository.findAll();
    }

    public Optional<MaintenanceSchedule> getScheduleById(Long id) {
        return repository.findById(id);
    }

    public MaintenanceSchedule saveSchedule(MaintenanceSchedule schedule) {
        return repository.save(schedule);
    }

    public MaintenanceSchedule updateSchedule(Long id, MaintenanceSchedule scheduleDetails) {
        Optional<MaintenanceSchedule> optionalSchedule = repository.findById(id);
        if (optionalSchedule.isPresent()) {
            MaintenanceSchedule schedule = optionalSchedule.get();
            schedule.setVehicleMake(scheduleDetails.getVehicleMake());
            schedule.setVehicleModel(scheduleDetails.getVehicleModel());
            schedule.setMaintenanceType(scheduleDetails.getMaintenanceType());
            schedule.setServiceInterval(scheduleDetails.getServiceInterval());
            schedule.setLastPerformedAt(scheduleDetails.getLastPerformedAt());
            return repository.save(schedule);
        }
        return null;
    }

    public void deleteSchedule(Long id) {
        repository.deleteById(id);
    }
}