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

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.service.AttrezzoService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/attrezzi/pageable")
public class AttrezzoPageable {
@Autowired AttrezzoService attrezzoservice;
	
	@GetMapping
	public ResponseEntity<Page<Attrezzo>> getAllPageable(Pageable pageable){
		return new ResponseEntity<Page<Attrezzo>>(attrezzoservice.getAllPageableAttrezzi(pageable), HttpStatus.OK);
	}
}
