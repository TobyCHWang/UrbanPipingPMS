package com.urbanpiping.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="projects")
public class Project {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="projectId")
	private long projectId;
	
	@Column(name="projectName")
	private String projectName;
	
	@Column(name="projectDesc")
	private String projectDesc;
	
	@Column(name="projectStartDate")
	private String projectStartDate;
	
	@Column(name="projectDueDate")
	private String projectDueDate;
	
	@Column(name="projectCity")
	private String projectCity;
	
	@Column(name="projectStreet")
	private String projectStreet;
	
	@Column(name="projectProv")
	private String projectProv;
	
	@Column(name="projectPostalCode")
	private String projectPostalCode;
	
//	private Client clientId;
//	private Status statusId;


	public Project() {
		
	}

	public Project(String projectName, String projectDesc, String projectStartDate, String projectDueDate,
			String projectCity, String projectStreet, String projectProv, String projectPostalCode) {
		super();
		this.projectName = projectName;
		this.projectDesc = projectDesc;
		this.projectStartDate = projectStartDate;
		this.projectDueDate = projectDueDate;
		this.projectCity = projectCity;
		this.projectStreet = projectStreet;
		this.projectProv = projectProv;
		this.projectPostalCode = projectPostalCode;
	}

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDesc() {
		return projectDesc;
	}

	public void setProjectDesc(String projectDesc) {
		this.projectDesc = projectDesc;
	}

	public String getProjectStartDate() {
		return projectStartDate;
	}

	public void setProjectStartDate(String projectStartDate) {
		this.projectStartDate = projectStartDate;
	}

	public String getProjectDueDate() {
		return projectDueDate;
	}

	public void setProjectDueDate(String projectDueDate) {
		this.projectDueDate = projectDueDate;
	}

	public String getProjectCity() {
		return projectCity;
	}

	public void setProjectCity(String projectCity) {
		this.projectCity = projectCity;
	}

	public String getProjectStreet() {
		return projectStreet;
	}

	public void setProjectStreet(String projectStreet) {
		this.projectStreet = projectStreet;
	}

	public String getProjectProv() {
		return projectProv;
	}

	public void setProjectProv(String projectProv) {
		this.projectProv = projectProv;
	}

	public String getProjectPostalCode() {
		return projectPostalCode;
	}

	public void setProjectPostalCode(String projectPostalCode) {
		this.projectPostalCode = projectPostalCode;
	}

	
	

	
	

}
