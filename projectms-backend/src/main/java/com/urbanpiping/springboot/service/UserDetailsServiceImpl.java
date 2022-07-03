package com.urbanpiping.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.urbanpiping.springboot.model.User;
import com.urbanpiping.springboot.util.CustomPasswordEncoder;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private CustomPasswordEncoder passwordEncoder;
	

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user =new User();
		user.setUserEmail(username);
		user.setUserPassword(passwordEncoder.getPasswordEncoder().encode("abc"));
		user.setUserId(1L);
		return user;
	}

}
