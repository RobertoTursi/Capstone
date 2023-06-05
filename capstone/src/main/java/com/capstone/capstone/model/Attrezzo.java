package com.capstone.capstone.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="attrezzi")
public class Attrezzo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true)
	private String nome;
	private String sottotitolo;
	@Column(nullable = false)
	private String descrizione;
	private String descrizione2;
	@Column(nullable = false)
	private Double prezzo;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING) 
	private TipoAttrezzo tipoAttrezzo;
	@Column(nullable = false)
	private String img;
	
	public Attrezzo(String nome, String sottotitolo, String descrizione, String descrizione2, Double prezzo, TipoAttrezzo tipoAttrezzo, String img) {
		super();
		this.nome = nome;
		this.sottotitolo = sottotitolo;
		this.descrizione = descrizione;
		this.descrizione2 = descrizione2;
		this.prezzo = prezzo;
		this.tipoAttrezzo = tipoAttrezzo;
		this.img = img;
	}
	
	
}
