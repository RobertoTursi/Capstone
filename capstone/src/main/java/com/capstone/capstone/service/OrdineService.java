package com.capstone.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.model.Utente;
import com.capstone.capstone.repository.OrdineDaoRepository;
import com.capstone.capstone.repository.OrdinePageableRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class OrdineService {
	
	@Autowired OrdineDaoRepository repo;
	@Autowired OrdinePageableRepository repoPageable;
	
	public Ordine createOrdine(Ordine o) {
		repo.save(o);
		return o;
	}
	
	public List<Ordine> getAllOrdini(){
		return (List<Ordine>) repo.findAll();
	}
	
	public String removeOrdineById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L'ordine che stai cercando di eliminare, con id: " + id + " non esiste");
		}
		repo.deleteById(id);
		return "L'ordine con id" + id + " eliminato con successo";
	}
	
	public Ordine updateOrdine(Ordine o) {
		if(!repo.existsById(o.getId())) {
			throw new EntityExistsException("L'ordine che stai cercando di modificare, con id: " + o.getId() + " non esiste");
		}else {
			repo.save(o);
		}
		return o;
	}
	
	public Ordine getOrdineById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L'ordine che stai cercando, con id: " + id + " non esiste");
		}
		return repo.findById(id).get();
	}
	
	public Page<Ordine> getAllPageableOrdini(Pageable pageable){
		return repoPageable.findAll(pageable);
	}
}

