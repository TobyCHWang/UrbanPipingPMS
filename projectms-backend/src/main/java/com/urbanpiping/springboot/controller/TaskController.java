package com.urbanpiping.springboot.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanpiping.springboot.exception.ResourceNotFoundException;
import com.urbanpiping.springboot.model.Task;
import com.urbanpiping.springboot.repository.TaskRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	// get all employees
	@GetMapping("/tasks")
	public List<Task> getAllEmployees() {
		return taskRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/tasks")
	public Task createEmployee(@RequestBody Task task) {
		return taskRepository.save(task);
	}

	// get employee by id restapi
	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getEmployeeById(@PathVariable Long id) {
		Task task = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id: " + id));
		return ResponseEntity.ok(task);
	}

	// update employee rest api
	@PutMapping("/tasks/{id}")
	public ResponseEntity<Task> updateEmployee(@PathVariable Long id, @RequestBody Task taskDetails) {
		
		Task task = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id: " + id));

		Calendar start = Calendar.getInstance();
		start.setTime(taskDetails.getTaskStartDate());
		start.add(Calendar.DATE, -1);
		
		Calendar due = Calendar.getInstance();
		due.setTime(taskDetails.getTaskDueDate());
		due.add(Calendar.DATE, -1);
		
		task.setTaskName(taskDetails.getTaskName());
		task.setTaskDesc(taskDetails.getTaskDesc());
		task.setTaskStartDate(start.getTime());
		task.setTaskDueDate(due.getTime());
		task.setTaskStatus(taskDetails.getTaskStatus());
		task.setTaskType(taskDetails.getTaskType());
		task.setTaskPriority(taskDetails.getTaskPriority());
//		task.setEmployees(taskDetails.getEmployees());
		
		Task updatedTask = taskRepository.save(task);
		return ResponseEntity.ok(updatedTask);
	}

	// delete employee rest api
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Task task = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id: " + id));
		taskRepository.delete(task);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
