package com.capstone.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.service.OrdineService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ordini/pageable")
public class OrdinePageable {
	
@Autowired OrdineService ordineservice;
	
	@GetMapping
	public ResponseEntity<Page<Ordine>> getAllPageable(Pageable pageable){
		return new ResponseEntity<Page<Ordine>>(ordineservice.getAllPageableOrdini(pageable), HttpStatus.OK);
	}
}
