package com.capstone.capstone.payload;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String nome;
    private String username;
    private String email;
    private String password;
 // Per registrare tutti come USER di Default commentare roles
    //commentando roles facciamo in modo che nessuno possa registrarsi come admin alle nostre spalle
    //decommentare solo in caso di primo utilizzo per registrare sé stessi come admin
    private Set<String> roles;
}
