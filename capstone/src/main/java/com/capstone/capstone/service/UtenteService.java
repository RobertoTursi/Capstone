package com.capstone.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import com.capstone.capstone.model.Utente;
import com.capstone.capstone.repository.UtenteDaoRepository;
import com.capstone.capstone.repository.UtentePageableRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class UtenteService {
	
	@Autowired UtenteDaoRepository repo;
	@Autowired UtentePageableRepository repoPageable;
	
	public Utente createUtente(Utente u) {
		if(repo.existsByEmail(u.getEmail())) {
			throw new EntityExistsException("E' già presente un utente con questa email: " + u.getEmail());
		}else {
			repo.save(u);
		}
		return u;
	}
	
	public List<Utente> getAllUtenti(){
		return (List<Utente>) repo.findAll();
	}
	
	public Page<Utente> getAllPageableUtenti(Pageable pageable){
		return repoPageable.findAll(pageable);
	}
	
	public String removeUtenteById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L'utente che stai cercando di eliminare, con id: " + id + " non esiste");
		}
		repo.deleteById(id);
		return "L'utente con id" + id + " eliminato con successo";
	}
	
	public Utente updateUtente(Utente u) {
		if(!repo.existsById(u.getId())) {
			throw new EntityExistsException("L'utente che stai cercando di modificare, con id: " + u.getId() + " non esiste");
		}else {
			repo.save(u);
		}
		return u;
	}
	
	public Utente getUtenteById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L'utente che stai cercando, con id: " + id + " non esiste");
		}
		return repo.findById(id).get();
	}
	
	public Utente getUtenteByUsername(String username) {
		if(!repo.existsByUsername(username)) {
			throw new EntityExistsException("L'utente che stai cercando, con username: " + username + " non esiste");
		}
		return repo.findByUsername(username);
	}
}
