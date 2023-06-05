package com.capstone.capstone.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.TipoAttrezzo;

public interface AttrezzoDaoRepository extends CrudRepository<Attrezzo, Long>{
	
	public Attrezzo findByNome(String nome);
	
	public Boolean existsByNome(String nome);
	
	public List<Attrezzo> findByTipoAttrezzo(TipoAttrezzo tipoAttrezzo);
	public Boolean existsByTipoAttrezzo(TipoAttrezzo tipoAttrezzo);
}
