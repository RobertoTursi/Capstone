package com.capstone.capstone.configuration;

import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.capstone.capstone.model.Role;
import com.capstone.capstone.model.Utente;

@Configuration
public class UtenteConfiguration {
	
	@Bean("UtenteConfiguration")
	@Scope("prototype")
	public Utente createUtente(String nome, String username, String email, String password, Set<Role> roles) {
		return new Utente(nome, username, email, password, roles);
	}
	
	@Bean("CustomUtenteConfiguration")
	@Scope("prototype")
	public Utente createCustomUtente() {
		return new Utente();
	}
	
}
