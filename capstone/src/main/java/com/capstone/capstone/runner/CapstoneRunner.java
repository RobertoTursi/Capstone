package com.capstone.capstone.runner;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.capstone.capstone.config.SecurityConfig;
import com.capstone.capstone.model.Attrezzo;
import com.capstone.capstone.model.TipoAttrezzo;
import com.capstone.capstone.model.Utente;
import com.capstone.capstone.service.AttrezzoService;
import com.capstone.capstone.service.UtenteService;
import com.capstone.capstone.model.ERole;
import com.capstone.capstone.model.Ordine;
import com.capstone.capstone.model.Role;
import com.capstone.capstone.service.AuthService;
import com.capstone.capstone.service.OrdineService;
import com.capstone.capstone.repository.RoleRepository;
import com.capstone.capstone.repository.UserRepository;
import com.capstone.capstone.security.JwtTokenProvider;

@Component
public class CapstoneRunner implements CommandLineRunner{
	
	@Autowired @Qualifier("AttrezzoConfiguration") ObjectProvider<Attrezzo> attrezzoprovider;
	@Autowired AttrezzoService attrezzoservice;
	
	@Autowired @Qualifier("UtenteConfiguration") ObjectProvider<Utente> utenteprovider;
	@Autowired UtenteService utenteservice;
	
	@Autowired @Qualifier("OrdineConfiguration") ObjectProvider<Ordine> ordineprovider;
	@Autowired OrdineService ordineservice;
	
	@Autowired SecurityConfig securityconfig;
	
	@Autowired RoleRepository roleRepository;
	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder passwordEncoder;
	@Autowired AuthService authService;
	
	private Set<Role> adminRole;
	private Set<Role> moderatorRole;
	private Set<Role> userRole;
	
	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("Run...");
		
		
		//ordineservice.saveOrdine(ordineprovider.getObject());
		
		//attrezzoservice.saveAttrezzo(attrezzoprovider.getObject("", "", "", "", , TipoAttrezzo., ""));
		
		//setRoleDefault();  //richiamiamo il metodo sottostante per salvare i ruoli nella table roles
		
	}
	
	
	private void setRoleDefault() {
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		roleRepository.save(moderator);
		
		adminRole = new HashSet<Role>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		moderatorRole = new HashSet<Role>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		userRole = new HashSet<Role>();
		userRole.add(user);
	}

}
