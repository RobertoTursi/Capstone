package com.capstone.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.capstone.capstone.model.ERole;
import com.capstone.capstone.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
