package com.urbanpiping.springboot.model;

import java.util.Calendar;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "projectId")
	private long projectId;

	@Column(name = "projectName")
	private String projectName;

	@Column(name = "projectDesc")
	private String projectDesc;

	@Column(name = "projectStartDate")
	@Temporal(TemporalType.DATE)
	private Date projectStartDate;

	@Column(name = "projectDueDate")
	@Temporal(TemporalType.DATE)
	private Date projectDueDate;

	@Column(name = "projectCity")
	private String projectCity;

	@Column(name = "projectStreet")
	private String projectStreet;

	@Column(name = "projectProv")
	private String projectProv;

	@Column(name = "projectPostalCode")
	private String projectPostalCode;

	@Column(name = "projectStatus")
	private String projectStatus;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "proj_task_fk", referencedColumnName = "projectId")
	Set<Task> tasks = new HashSet<>();

	public Project() {

	}

	public Project(String projectName, String projectDesc, Date projectStartDate, Date projectDueDate,
			String projectCity, String projectStreet, String projectProv, String projectPostalCode,
			String projectStatus) {
		super();
		this.projectName = projectName;
		this.projectDesc = projectDesc;
		this.projectStartDate = projectStartDate;
		this.projectDueDate = projectDueDate;
		this.projectCity = projectCity;
		this.projectStreet = projectStreet;
		this.projectProv = projectProv;
		this.projectPostalCode = projectPostalCode;
		this.projectStatus = projectStatus;
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

	public Date getProjectStartDate() {
		return projectStartDate;
	}

	public void setProjectStartDate(Date projectStartDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(projectStartDate);
		c.add(Calendar.DATE, 1);
		this.projectStartDate = c.getTime();
	}

	public Date getProjectDueDate() {
		return projectDueDate;
	}

	public void setProjectDueDate(Date projectDueDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(projectDueDate);
		c.add(Calendar.DATE, 1);
		this.projectDueDate = c.getTime();
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

	public String getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}

	public Set<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

}
