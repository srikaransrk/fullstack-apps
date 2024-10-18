package com.springboot.e_commerce_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.e_commerce_app.model.Cart;
import com.springboot.e_commerce_app.model.Product;

@Repository
public interface CartRespository extends JpaRepository<Cart, Integer>{

}
