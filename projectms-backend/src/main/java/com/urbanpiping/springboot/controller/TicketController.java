package com.urbanpiping.springboot.controller;

import java.util.Calendar;
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
import com.urbanpiping.springboot.model.Ticket;
import com.urbanpiping.springboot.repository.TicketRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class TicketController {

	@Autowired
	private TicketRepository ticketRepository;

	// get all tickets
	@GetMapping("/tickets")
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}

	// create ticket rest api
	@PostMapping("/tickets")
	public Ticket createTicket(@RequestBody Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	// get ticket by id rest api
	@GetMapping("/tickets/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id: " + id));
		return ResponseEntity.ok(ticket);
	}

	// update ticket rest api
	@PutMapping("/tickets/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticketDetails) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id: " + id));

		Calendar open = Calendar.getInstance();
		open.setTime(ticketDetails.getTicketOpenedDate());
		open.add(Calendar.DATE, -1);
		
		ticket.setTicketSubject(ticketDetails.getTicketSubject());
		ticket.setTicketStatus(ticketDetails.getTicketStatus());
		ticket.setTicketDetails(ticketDetails.getTicketDetails());
		ticket.setTicketOpenedDate(open.getTime());
		ticket.setTicketComment(ticketDetails.getTicketComment());

		Ticket updatedTicket = ticketRepository.save(ticket);
		return ResponseEntity.ok(updatedTicket);
	}

	// delete ticket rest api
	@DeleteMapping("/tickets/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable Long id) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id: " + id));
		ticketRepository.delete(ticket);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
