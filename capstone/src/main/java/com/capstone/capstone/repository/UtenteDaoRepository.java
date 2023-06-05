package com.capstone.capstone.repository;

import org.springframework.data.repository.CrudRepository;

import com.capstone.capstone.model.Utente;

public interface UtenteDaoRepository extends CrudRepository<Utente, Long>{
	
	public Utente findByEmail(String email);
	public Boolean existsByEmail(String email);
	
	public Utente findByUsername(String username);
	public Boolean existsByUsername(String username);
}
