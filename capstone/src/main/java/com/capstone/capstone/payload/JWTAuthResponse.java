package com.capstone.capstone.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JWTAuthResponse {
	
	
	//Questa è la risposta che daremo al client al login; se volessimo ricevere altri dati possiamo aggiungerli
	//qui dentro
	private String username;
    private String accessToken;
    private String tokenType = "Bearer";
}
