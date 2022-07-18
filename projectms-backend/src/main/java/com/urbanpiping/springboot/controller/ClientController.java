package com.urbanpiping.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanpiping.springboot.exception.ResourceNotFoundException;
import com.urbanpiping.springboot.model.Client;
import com.urbanpiping.springboot.repository.ClientRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class ClientController {

	@Autowired
	private ClientRepository clientRepository;

	// get all clients
	@GetMapping("/clients")
	public List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	// create client rest api
	@PostMapping("/clients")
	public Client createClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}

	// get client by id rest api
	@GetMapping("/clients/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id: " + id));
		return ResponseEntity.ok(client);
	}

	// update client rest api
	@PutMapping("/clients/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id: " + id));
		client.setClientFirstName(clientDetails.getClientFirstName());
		client.setClientLastName(clientDetails.getClientLastName());
		client.setClientEmail(clientDetails.getClientEmail());
		client.setClientContact(clientDetails.getClientContact());
		client.setClientStreet(clientDetails.getClientStreet());
		client.setClientCity(clientDetails.getClientCity());
		client.setClientProvince(clientDetails.getClientProvince());
		client.setClientPostalCode(clientDetails.getClientPostalCode());
		Client updatedClient = clientRepository.save(client);
		return ResponseEntity.ok(updatedClient);
	}
	
	// delete client rest api
	@DeleteMapping("/clients/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id: " + id));
		clientRepository.delete(client);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
