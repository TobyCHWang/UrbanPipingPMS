package com.urbanpiping.springboot.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

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
//	@JsonFormat(pattern = "yyyy/MM/dd")
	private Date taskStartDate;

	@Column(name = "taskDueDate")
//	@JsonFormat(pattern = "yyyy/MM/dd")
	private Date taskDueDate;

	@Column(name = "taskStatus")
	private String taskStatus;

	@Column(name = "taskType")
	private String taskType;

	@Column(name = "taskPriority")
	private String taskPriority;

//	private int employeeId;
//	private int photoId;

	public Task() {

	}

	public Task(String taskName, String taskDesc, Date taskStartDate, Date taskDueDate, String taskStatus,
			String taskType, String taskPriority) {
		super();
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
		this.taskStartDate = taskStartDate;
	}

	public Date getTaskDueDate() {
		return taskDueDate;
	}

	public void setTaskDueDate(Date taskDueDate) {
		this.taskDueDate = taskDueDate;
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

}
