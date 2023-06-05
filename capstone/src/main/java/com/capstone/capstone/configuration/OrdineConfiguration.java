package com.capstone.capstone.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.model.TipoAttrezzo;
import com.capstone.capstone.model.Utente;

public class OrdineConfiguration {
	
	@Bean("OrdineConfiguration")
	@Scope("prototype")
	public Ordine createOrdine(List<Attrezzo> listaAttrezzi) {
		return new Ordine(listaAttrezzi);
	}
	
	@Bean("CustomOrdineConfiguration")
	@Scope("prototype")
	public Ordine createCustomOrdine() {
		return new Ordine();
	}
}
