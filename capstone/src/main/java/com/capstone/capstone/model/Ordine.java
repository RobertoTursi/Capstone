



//public class Ordine {
	
	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	//private Long id;
	//final private LocalDateTime data = LocalDateTime.now();
	//@OneToMany
	//private List<Attrezzo> listaAttrezzi;
	
	//public Ordine(List<Attrezzo> listaAttrezzi) {
		//super();
		//this.listaAttrezzi = listaAttrezzi;
	//}
	
	
//}

//////////////////////////////////////////////////////////
package com.capstone.capstone.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "ordini")
public class Ordine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	final private LocalDateTime data = LocalDateTime.now();
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "ordine_attrezzi",
            joinColumns = @JoinColumn(name = "ordine_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "attrezzo_id", referencedColumnName = "id")
    )
	private List<Attrezzo> listaAttrezzi;
	
	public Ordine(List<Attrezzo> listaAttrezzi) {
		super();
		this.listaAttrezzi = listaAttrezzi;
	}
	
	
}
