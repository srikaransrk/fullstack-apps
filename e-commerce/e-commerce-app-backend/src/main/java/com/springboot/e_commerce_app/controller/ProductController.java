package com.springboot.e_commerce_app.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.springboot.e_commerce_app.model.Cart;
import com.springboot.e_commerce_app.model.Product;
import com.springboot.e_commerce_app.repository.CartRespository;
import com.springboot.e_commerce_app.repository.ProductRespository;


@RestController
public class ProductController {
	
	@Autowired
	private ProductRespository productRepository;
	
	@Autowired
	private CartRespository cartRepository;
	
	@GetMapping("/products")
	public List<Product> getProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping("/carts")
	public List<Cart> getCarts() {
		return cartRepository.findAll();
	}
	
	@PostMapping(path = "/product")
	public ResponseEntity<Product> createUser(@RequestBody Product reservation) {
		
		Product saved = productRepository.save(reservation);
		URI location = ServletUriComponentsBuilder.
				fromCurrentRequest()
				.path("/{id}").
				buildAndExpand(saved.getId())
				.toUri(); 
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping(path = "/cart")
	public ResponseEntity<Product> createUser(@RequestBody Cart cart) {
		
		Cart saved = cartRepository.save(cart);
		URI location = ServletUriComponentsBuilder.
				fromCurrentRequest()
				.path("/{id}").
				buildAndExpand(saved.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping(path ="/carts")
	public void clearCart() {
		cartRepository.deleteAll();
	}
	
	
}
