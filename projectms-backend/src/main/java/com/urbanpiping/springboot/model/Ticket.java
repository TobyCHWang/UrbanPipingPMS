package com.urbanpiping.springboot.model;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "tickets")
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ticketId")
	private long ticketId;

	@Column(name = "ticketSubject")
	private String ticketSubject;

	@Column(name = "ticketDetails")
	private String ticketDetails;

	@Column(name = "ticketStatus")
	private String ticketStatus;

	@Column(name = "ticketOpenedDate")
	@Temporal(TemporalType.DATE)
	private Date ticketOpenedDate;

	@Column(name = "ticketComment")
	private String ticketComment;

	public Ticket() {

	}

	public Ticket(String ticketSubject, String ticketDetails, String ticketStatus, Date ticketOpenedDate,
			String ticketComment) {
		super();
		this.ticketSubject = ticketSubject;
		this.ticketDetails = ticketDetails;
		this.ticketStatus = ticketStatus;
		this.ticketOpenedDate = ticketOpenedDate;
		this.ticketComment = ticketComment;
	}

	public long getTicketId() {
		return ticketId;
	}

	public void setTicketId(long ticketId) {
		this.ticketId = ticketId;
	}

	public String getTicketSubject() {
		return ticketSubject;
	}

	public void setTicketSubject(String ticketSubject) {
		this.ticketSubject = ticketSubject;
	}

	public String getTicketStatus() {
		return ticketStatus;
	}

	public void setTicketStatus(String ticketStatus) {
		this.ticketStatus = ticketStatus;
	}

	public Date getTicketOpenedDate() {
		return ticketOpenedDate;
	}

	public void setTicketOpenedDate(Date ticketOpenedDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(ticketOpenedDate);
		c.add(Calendar.DATE, 1);
		this.ticketOpenedDate = c.getTime();
	}

	public String getTicketComment() {
		return ticketComment;
	}

	public void setTicketComment(String ticketComment) {
		this.ticketComment = ticketComment;
	}

	public String getTicketDetails() {
		return ticketDetails;
	}

	public void setTicketDetails(String ticketDetails) {
		this.ticketDetails = ticketDetails;
	}

}
