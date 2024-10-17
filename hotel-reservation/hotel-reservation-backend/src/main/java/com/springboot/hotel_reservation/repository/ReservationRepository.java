package com.springboot.hotel_reservation.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.hotel_reservation.model.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
	
	public Optional<Reservation> findById(int id);

}
