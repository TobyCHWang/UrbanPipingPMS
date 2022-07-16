package com.urbanpiping.springboot.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="clients")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "clientId")
	private long clientId;
	
	@Column(name = "clientFirstName")
	private String clientFirstName;
	
	@Column(name = "clientLastName")
	private String clientLastName;
	
	@Column(name = "clientEmail")
	private String clientEmail;
	
	@Column(name = "clientContact")
	private String clientContact;
	
	@Column(name = "clientStreet")
	private String clientStreet;
	
	@Column(name = "clientPostalCode")
	private String clientPostalCode;
	
	@Column(name = "clientCity")
	private String clientCity;
	
	@Column(name = "clientProvince")
	private String clientProvince;
	
	@OneToMany(cascade =  CascadeType.ALL)
	@JoinColumn(name = "client_proj_fk", referencedColumnName = "clientId")
	Set<Project> projects = new HashSet<>();
	
	@OneToMany(cascade =  CascadeType.ALL)
	@JoinColumn(name = "client_ticket_fk", referencedColumnName = "clientId")
	Set<Ticket> tickets = new HashSet<>();
	
	public Client() {
		
	}

	public Client(String clientFirstName, String clientLastName, String clientEmail, String clientContact,
			String clientStreet, String clientPostalCode, String clientCity, String clientProvince) {
		super();
		this.clientFirstName = clientFirstName;
		this.clientLastName = clientLastName;
		this.clientEmail = clientEmail;
		this.clientContact = clientContact;
		this.clientStreet = clientStreet;
		this.clientPostalCode = clientPostalCode;
		this.clientCity = clientCity;
		this.clientProvince = clientProvince;
	}

	public long getClientId() {
		return clientId;
	}

	public void setClientId(long clientId) {
		this.clientId = clientId;
	}

	public String getClientFirstName() {
		return clientFirstName;
	}

	public void setClientFirstName(String clientFirstName) {
		this.clientFirstName = clientFirstName;
	}

	public String getClientLastName() {
		return clientLastName;
	}

	public void setClientLastName(String clientLastName) {
		this.clientLastName = clientLastName;
	}

	public String getClientEmail() {
		return clientEmail;
	}

	public void setClientEmail(String clientEmail) {
		this.clientEmail = clientEmail;
	}

	public String getClientContact() {
		return clientContact;
	}

	public void setClientContact(String clientContact) {
		this.clientContact = clientContact;
	}

	public String getClientStreet() {
		return clientStreet;
	}

	public void setClientStreet(String clientStreet) {
		this.clientStreet = clientStreet;
	}

	public String getClientCity() {
		return clientCity;
	}

	public void setClientCity(String clientCity) {
		this.clientCity = clientCity;
	}

	public String getClientProvince() {
		return clientProvince;
	}

	public void setClientProvince(String clientProvince) {
		this.clientProvince = clientProvince;
	}

	public String getClientPostalCode() {
		return clientPostalCode;
	}

	public void setClientPostalCode(String clientPostalCode) {
		this.clientPostalCode = clientPostalCode;
	}
		
}
