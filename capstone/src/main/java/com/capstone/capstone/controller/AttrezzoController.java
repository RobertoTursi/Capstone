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

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.TipoAttrezzo;
import com.capstone.capstone.service.AttrezzoService;

@CrossOrigin(origins = "*")  //per maggiorni informazioni sull'utilizzo del CrossOrigin visitare https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
@RestController
@RequestMapping("/attrezzi")
public class AttrezzoController {

	@Autowired AttrezzoService attrezzoservice;
	
	
	@GetMapping
	public ResponseEntity<?> getAll(){
		return new ResponseEntity<>(attrezzoservice.getAllAttrezzi(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<?> createAttrezzo(@RequestBody Attrezzo attrezzo){
		return new ResponseEntity<Attrezzo>(attrezzoservice.saveAttrezzo(attrezzo), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/id/{id}")
	public ResponseEntity<String> deleteAttrezzo(@PathVariable Long id){
		return new ResponseEntity<String>(attrezzoservice.removeAttrezzo(id), HttpStatus.OK);
	}

		
	@GetMapping("/id/{id}")
	public ResponseEntity<?> getAttrezzo(@PathVariable Long id){
		return new ResponseEntity<Attrezzo>(attrezzoservice.getAttrezzoById(id), HttpStatus.OK);
	}
	
	@PutMapping("/id/{id}")
	public ResponseEntity<?> updateAttrezzo(@RequestBody Attrezzo attrezzo){
		return new ResponseEntity<Attrezzo>(attrezzoservice.updateAttrezzo(attrezzo), HttpStatus.CREATED);
	}
	
	@GetMapping("/tipoAttrezzo/{tipoAttrezzo}")
	public ResponseEntity<?> getAttrezziByTipoAttrezzo(@PathVariable TipoAttrezzo tipoAttrezzo){
		return new ResponseEntity<>(attrezzoservice.getAttrezziByTipoAttrezzo(tipoAttrezzo), HttpStatus.OK);
	}
}
