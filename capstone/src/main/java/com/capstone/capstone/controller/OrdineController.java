package com.capstone.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.service.OrdineService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ordini")
public class OrdineController {
	
	@Autowired OrdineService ordineservice;
	
	@GetMapping
	public ResponseEntity<?> getAllOrdini(){
		return new ResponseEntity<>(ordineservice.getAllOrdini(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> createOrdine(@RequestBody Ordine o){
		return new ResponseEntity<Ordine>(ordineservice.createOrdine(o), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteOrdine(@PathVariable Long id){
		return new ResponseEntity<String>(ordineservice.removeOrdineById(id), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUtente(@RequestBody Ordine o){
		return new ResponseEntity<Ordine>(ordineservice.updateOrdine(o), HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getOrdine(@PathVariable Long id){
		return new ResponseEntity<Ordine>(ordineservice.getOrdineById(id), HttpStatus.OK);
	}
}
