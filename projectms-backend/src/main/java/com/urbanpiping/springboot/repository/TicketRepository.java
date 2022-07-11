package com.urbanpiping.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.urbanpiping.springboot.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
