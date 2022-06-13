package com.urbanpiping.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empId")
	private long employeeId;

	@Column(name = "empFirstName")
	private String employeeFirstName;

	@Column(name = "empLastName")
	private String employeeLastName;

	@Column(name = "empEmail")
	private String employeeEmail;

	@Column(name = "empContact")
	private String employeeContact;

	@Column(name = "empLocation")
	private String employeeLocation;

//	private JobRole jobRole;
//	private Department deptName;

	public Employee() {

	}

	public Employee(String employeeFirstName, String employeeLastName, String employeeEmail, String employeeContact,
			String employeeLocation) {
		super();
		this.employeeFirstName = employeeFirstName;
		this.employeeLastName = employeeLastName;
		this.employeeEmail = employeeEmail;
		this.employeeContact = employeeContact;
		this.employeeLocation = employeeLocation;
	}

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeFirstName() {
		return employeeFirstName;
	}

	public void setEmployeeFirstName(String employeeFirstName) {
		this.employeeFirstName = employeeFirstName;
	}

	public String getEmployeeLastName() {
		return employeeLastName;
	}

	public void setEmployeeLastName(String employeeLastName) {
		this.employeeLastName = employeeLastName;
	}

	public String getEmployeeEmail() {
		return employeeEmail;
	}

	public void setEmployeeEmail(String employeeEmail) {
		this.employeeEmail = employeeEmail;
	}

	public String getEmployeeContact() {
		return employeeContact;
	}

	public void setEmployeeContact(String employeeContact) {
		this.employeeContact = employeeContact;
	}

	public String getEmployeeLocation() {
		return employeeLocation;
	}

	public void setEmployeeLocation(String employeeLocation) {
		this.employeeLocation = employeeLocation;
	}
	
}
