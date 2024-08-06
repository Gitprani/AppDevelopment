package com.example.backend.demo.model;



import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class MaintenanceSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleMake;
    private String vehicleModel;
    private String maintenanceType;
    private int serviceInterval; // changed from 'interval'
    private LocalDateTime lastPerformedAt;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public String getMaintenanceType() {
        return maintenanceType;
    }

    public void setMaintenanceType(String maintenanceType) {
        this.maintenanceType = maintenanceType;
    }

    public int getServiceInterval() {
        return serviceInterval;
    }

    public void setServiceInterval(int serviceInterval) {
        this.serviceInterval = serviceInterval;
    }

    public LocalDateTime getLastPerformedAt() {
        return lastPerformedAt;
    }

    public void setLastPerformedAt(LocalDateTime lastPerformedAt) {
        this.lastPerformedAt = lastPerformedAt;
    }
}
