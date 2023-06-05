package com.capstone.capstone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.capstone.model.Utente;

public interface UtenteJpaRepository extends JpaRepository<Utente, Long>{

	Optional<Utente> findByUsername(String username);

}
