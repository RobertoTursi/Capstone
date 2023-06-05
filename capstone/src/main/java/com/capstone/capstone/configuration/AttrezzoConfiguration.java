package com.capstone.capstone.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.TipoAttrezzo;

@Configuration
public class AttrezzoConfiguration {
	
	@Bean("AttrezzoConfiguration")
	@Scope("prototype")
	public Attrezzo createAttrezzo(String nome, String sottotitolo, String descrizione, String descrizione2, Double prezzo,
			TipoAttrezzo TipoAttrezzo, String img) {
		return new Attrezzo(nome, sottotitolo, descrizione, descrizione2, prezzo, TipoAttrezzo, img);
	}
	
	@Bean("CustomAttrezzoConfiguration")
	@Scope("prototype")
	public Attrezzo createCustomAttrezzo() {
		return new Attrezzo();
	}
}
