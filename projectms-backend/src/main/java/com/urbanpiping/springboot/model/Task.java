package com.urbanpiping.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tasks")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="taskId")
	private long taskId;
	
	@Column(name="taskName")
	private String taskName;
	
	@Column(name="taskDesc")
	private String taskDesc;
	
	@Column(name="taskStartDate")
	private String taskStartDate;
	
	@Column(name="taskDueDate")
	private String taskDueDate;
//	private employee employeeId;
//	private Status statusId;
//	private TaskType taskTypeId;
//	private Photo photoId;
//	private Priority priorityId;

	public Task() {
		
	}

	public Task(String taskName, String taskDesc, String taskStartDate, String taskDueDate) {
		super();
		this.taskName = taskName;
		this.taskDesc = taskDesc;
		this.taskStartDate = taskStartDate;
		this.taskDueDate = taskDueDate;
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

	public String getTaskStartDate() {
		return taskStartDate;
	}

	public void setTaskStartDate(String taskStartDate) {
		this.taskStartDate = taskStartDate;
	}

	public String getTaskDueDate() {
		return taskDueDate;
	}

	public void setTaskDueDate(String taskDueDate) {
		this.taskDueDate = taskDueDate;
	}
	

	
	

}
