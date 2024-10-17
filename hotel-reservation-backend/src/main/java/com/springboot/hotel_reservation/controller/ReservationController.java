package com.springboot.hotel_reservation.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.springboot.hotel_reservation.model.Reservation;
import com.springboot.hotel_reservation.repository.ReservationRepository;


@RestController
public class ReservationController {
	
	@Autowired
	private ReservationRepository repository;
	
	
	@GetMapping(path = "/list")
	
	public List<Reservation> getUsers() {
		return repository.findAll();
	}

	// GET /user/{id}
	
	@GetMapping(path = "/list/{id}")
	public Optional<Reservation> getUsers(@PathVariable int id) {
		 
		return repository.findById(id);
	}

	// POST /users
	
	@PostMapping(path = "/new")
	public ResponseEntity<Reservation> createUser(@RequestBody Reservation reservation) {
		
		Reservation saved = repository.save(reservation);
		URI location = ServletUriComponentsBuilder.
				fromCurrentRequest()
				.path("/{id}").
				buildAndExpand(saved.getId())
				.toUri(); // /users/4 ==> /users/{id} , user.getId
		// location - /user/4
		return ResponseEntity.created(location).build();
	}
	
	// POST /users
	
	@PutMapping(path = "/new/{id}")
	public ResponseEntity<Reservation> updateUser(@PathVariable int id, @RequestBody Reservation reservation) {
		
		Optional<Reservation> existingReservation = repository.findById(id);

	    if (!existingReservation.isPresent()) {
	        return ResponseEntity.notFound().build();
	    }

	    Reservation updatedReservation = existingReservation.get();

	    // Copy all properties from reservation to updatedReservation, except for "id"
	    BeanUtils.copyProperties(reservation, updatedReservation, "id");

	    repository.save(updatedReservation);
		
		URI location = ServletUriComponentsBuilder.
				fromCurrentRequest()
				.path("/{id}").
				buildAndExpand(updatedReservation.getId())
				.toUri(); // /users/4 ==> /users/{id} , user.getId
		return ResponseEntity.created(location).build();

	}
	
	// delete /user/{id}
	
	@DeleteMapping(path = "/list/{id}")
	public void deleteUser(@PathVariable int id) {
		repository.deleteById(id);

	}

}
