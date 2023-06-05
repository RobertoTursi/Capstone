package com.capstone.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.capstone.model.Utente;


import java.util.Optional;

public interface UserRepository extends JpaRepository<Utente, Long> {

    Optional<Utente> findByEmail(String email);

    Optional<Utente> findByUsernameOrEmail(String username, String email);

    Optional<Utente> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
