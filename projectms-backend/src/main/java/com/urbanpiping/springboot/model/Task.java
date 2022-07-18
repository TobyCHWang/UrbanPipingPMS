package com.urbanpiping.springboot.model;

import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "taskId")
	private long taskId;

	@Column(name = "taskName")
	private String taskName;

	@Column(name = "taskDesc")
	private String taskDesc;

	@Column(name = "taskStartDate")
	@Temporal(TemporalType.DATE)
	private Date taskStartDate;

	@Column(name = "taskDueDate")
	@Temporal(TemporalType.DATE)
	private Date taskDueDate;

	@Column(name = "taskStatus")
	private String taskStatus;

	@Column(name = "taskType")
	private String taskType;

	@Column(name = "taskPriority")
	private String taskPriority;

	@Column(name = "taskDuration")
	private String taskDuration;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "tasks_employees", joinColumns = { @JoinColumn(name = "taskId") }, inverseJoinColumns = {
			@JoinColumn(name = "empId") })
	private Set<Employee> employees = new HashSet<>();

	public Task() {

	}

	public Task(long taskId, String taskName, String taskDesc, Date taskStartDate, Date taskDueDate, String taskStatus,
			String taskType, String taskPriority) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.taskDesc = taskDesc;
		this.taskStartDate = taskStartDate;
		this.taskDueDate = taskDueDate;
		this.taskStatus = taskStatus;
		this.taskType = taskType;
		this.taskPriority = taskPriority;
	}

	public long getTaskId() {
		return taskId;
	}

	public void setTaskId(long taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getTaskDesc() {
		return taskDesc;
	}

	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}

	public Date getTaskStartDate() {
		return taskStartDate;
	}

	public void setTaskStartDate(Date taskStartDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(taskStartDate);
		c.add(Calendar.DATE, 1);
		this.taskStartDate = c.getTime();
	}

	public Date getTaskDueDate() {
		return taskDueDate;
	}

	public void setTaskDueDate(Date taskDueDate) {
		Calendar c = Calendar.getInstance();
		c.setTime(taskDueDate);
		c.add(Calendar.DATE, 1);
		this.taskDueDate = c.getTime();
	}

	public String getTaskDuration() {
		return taskDuration;
	}

	public void setTaskDuration(String taskDuration) {
		this.taskDuration = taskDuration;
	}

	public String getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(String taskStatus) {
		this.taskStatus = taskStatus;
	}

	public String getTaskType() {
		return taskType;
	}

	public void setTaskType(String taskType) {
		this.taskType = taskType;
	}

	public String getTaskPriority() {
		return taskPriority;
	}

	public void setTaskPriority(String taskPriority) {
		this.taskPriority = taskPriority;
	}

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

}
