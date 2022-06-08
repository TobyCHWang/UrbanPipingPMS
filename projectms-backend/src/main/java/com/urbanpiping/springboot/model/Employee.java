package com.urbanpiping.springboot.model;

import javax.persistence.*;

@Entity
@Table(name="employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="empId")
	private long employeeId;
	
	@Column(name="empFirstName")
	private String employeeFirstName;
	
	@Column(name="empLastName")
	private String employeeLastName;
	
	@Column(name="empEmail")
	private String employeeEmail;
	
	@Column(name="empContact")
	private String employeeContact;
//	private JobRole jobId;
//	private Department deptId;
//	private Location locId;
	
	
	public Employee() {

	}

	public Employee(String employeeFirstName, String employeeLastName, String employeeEmail, String employeeContact) {
		super();
		this.employeeFirstName = employeeFirstName;
		this.employeeLastName = employeeLastName;
		this.employeeEmail = employeeEmail;
		this.employeeContact = employeeContact;
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

}
