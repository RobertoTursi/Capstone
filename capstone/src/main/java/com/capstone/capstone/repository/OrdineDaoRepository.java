package com.capstone.capstone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.model.Utente;

public interface OrdineDaoRepository extends JpaRepository<Ordine, Long>{


}
