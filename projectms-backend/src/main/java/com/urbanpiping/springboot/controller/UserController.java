package com.urbanpiping.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.util.StringBuilderFormattable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanpiping.springboot.exception.ResourceNotFoundException;
import com.urbanpiping.springboot.model.User;
import com.urbanpiping.springboot.repository.UserRepository;
import com.urbanpiping.springboot.service.NotificationService;


@RestController
@RequestMapping("/api/auth/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Autowired
	private NotificationService notificationService;

	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	// create user rest api
	@PostMapping("/users")
	public void createUser(@RequestBody User user) {
		notificationService.sendNotification(user);
		user.setUserPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		
		
		
	}

//	private void sendEmail(User user) {
//		String subjuect = "testsubkect";
//		String sender="toby";
//		String mailContent = "test"+user.getPassword();
//		
//		
//	}

	// get user by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
		return ResponseEntity.ok(user);
	}

	// update user rest api
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
		user.setUserFirstName(userDetails.getUserFirstName());
		user.setUserLastName(userDetails.getUserLastName());
		user.setUserEmail(userDetails.getUserEmail());
		user.setUserPassword(passwordEncoder.encode(userDetails.getUserPassword()));
		user.setUserStatus(userDetails.getUserStatus());
		user.setUserRole(userDetails.getUserRole());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	// delete user rest api
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
