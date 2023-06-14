package com.capstone.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.TipoAttrezzo;
import com.capstone.capstone.repository.AttrezzoDaoRepository;
import com.capstone.capstone.repository.AttrezzoPageableRepository;

import jakarta.persistence.EntityExistsException;

@Service
public class AttrezzoService {
	
	@Autowired AttrezzoDaoRepository repo;
	@Autowired AttrezzoPageableRepository repoPageable;
	
	public Attrezzo saveAttrezzo(Attrezzo a) {
		if(repo.existsByNome(a.getNome())) {
			throw new EntityExistsException("Nome attrezzo già esistente!!!");
		} else {
			repo.save(a);
		}
		return a;
	}
	
	public List<Attrezzo> getAllAttrezzi(){
		return (List<Attrezzo>) repo.findAll();
	}
	
	public Page<Attrezzo> getAllPageableAttrezzi(Pageable pageable){
		return repoPageable.findAll(pageable);
	}
	
	public String removeAttrezzo(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L' attrezzo con id " + id + " non esiste");
		} 
		repo.deleteById(id);
		return "attrezzo con id " + id + " eliminato";
	}
	
	public Attrezzo updateAttrezzo(Attrezzo a) {
		if(!repo.existsById(a.getId())) {
			throw new EntityExistsException("L' attrezzo con id " + a.getId() + " non esiste");
		}else {
			repo.save(a);
		}
		return a;
	}
	
	public Attrezzo getAttrezzoById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityExistsException("L' attrezzo con id " + id + " non esiste");
		}
		
		return repo.findById(id).get();
		
	}
	
	//Metodi tipoAttrezzo:
	@SuppressWarnings("unchecked")
	public List<Attrezzo> getAttrezziByTipoAttrezzo(TipoAttrezzo tipo){
		if(!repo.existsByTipoAttrezzo(tipo)) {
			throw new EntityExistsException("Il tipo attrezzo: " + tipo + " non esiste");
		}
		return (List<Attrezzo>) repo.findByTipoAttrezzo(tipo);
	}
}
