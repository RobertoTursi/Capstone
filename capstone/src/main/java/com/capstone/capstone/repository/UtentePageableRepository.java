package com.capstone.capstone.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.capstone.capstone.model.Utente;

public interface UtentePageableRepository extends PagingAndSortingRepository<Utente, Long>{

}
