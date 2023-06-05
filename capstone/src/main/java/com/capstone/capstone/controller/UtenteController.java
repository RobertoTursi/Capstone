package com.capstone.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.capstone.model.Utente;
import com.capstone.capstone.service.UtenteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/utenti")
public class UtenteController {
	
	@Autowired UtenteService utenteservice;
	
	@GetMapping
	public ResponseEntity<?> getAllUtenti(){
		return new ResponseEntity<>(utenteservice.getAllUtenti(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> createUtente(@RequestBody Utente u){
		return new ResponseEntity<Utente>(utenteservice.createUtente(u), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUtente(@PathVariable Long id){
		return new ResponseEntity<String>(utenteservice.removeUtenteById(id), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUtente(@RequestBody Utente u){
		return new ResponseEntity<Utente>(utenteservice.updateUtente(u), HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUtente(@PathVariable Long id){
		return new ResponseEntity<Utente>(utenteservice.getUtenteById(id), HttpStatus.OK);
	}
	
	@GetMapping("/username/{username}")
	public ResponseEntity<?> getUtenteByUsername(@PathVariable String username){
		return new ResponseEntity<Utente>(utenteservice.getUtenteByUsername(username), HttpStatus.OK);
	}
}
