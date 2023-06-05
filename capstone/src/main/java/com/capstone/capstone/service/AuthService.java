package com.capstone.capstone.service;

import com.capstone.capstone.payload.LoginDto;
import com.capstone.capstone.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
