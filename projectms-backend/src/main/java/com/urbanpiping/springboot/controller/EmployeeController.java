package com.urbanpiping.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.urbanpiping.springboot.model.Employee;
import com.urbanpiping.springboot.model.Task;
import com.urbanpiping.springboot.repository.EmployeeRepository;
import com.urbanpiping.springboot.repository.TaskRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private TaskRepository taskRepository;

	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

//	// get all employees assigned to a task
//	@GetMapping("/tasks/{taskId}/employees")
//	public ResponseEntity<List<Employee>> getAllEmployeesByTaskId(@PathVariable(value = "taskId") Long taskId) {
//		if (!taskRepository.existsById(taskId)) {
//			throw new ResourceNotFoundException("Task not found with id: " + taskId);
//		}
//		List<Employee> employees = employeeRepository.findEmployeesByTasksId(taskId);
//		return new ResponseEntity<>(employees, HttpStatus.OK);
//	}
//
//	// get all tasks assigned to the employee
//	@GetMapping("employees/{employeeId}/tasks")
//	public ResponseEntity<List<Task>> getAllTasksByEmployeeId(@PathVariable(value = "employeeId") Long employeeId) {
//		if (employeeRepository.existsById(employeeId)) {
//			throw new ResourceNotFoundException("Employee not found with id: " + employeeId);
//		}
//		List<Task> tasks = taskRepository.findTasksByEmployeesId(employeeId);
//		return new ResponseEntity<>(tasks, HttpStatus.OK);
//	}
//
//	// create or add employee for a task
//	@PostMapping("/tasks/{taskId}/employees")
//	public ResponseEntity<Employee> addEmployee(@PathVariable(value = "taskId") Long taskId,
//			@RequestBody Employee employeeDetails) {
//		Employee employee = taskRepository.findById(taskId).map(task -> {
//			long employeeId = employeeDetails.getEmployeeId();
//
//			// employee exists
//			if (employeeId != 0L) {
//				Employee _employee = employeeRepository.findById(employeeId)
//						.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + employeeId));
//				task.addEmployee(_employee);
//				taskRepository.save(task);
//				return _employee;
//			}
//
//			// add and create new employee
//			task.addEmployee(employeeDetails);
//			return employeeRepository.save(employeeDetails);
//		}).orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + taskId));
//		return new ResponseEntity<>(employee, HttpStatus.CREATED);
//	}
//
//	// delete an employee from a task by id
//	@DeleteMapping("tasks/{taskId}/employees/{employeeId}")
//	public ResponseEntity<HttpStatus> deleteEmployeeFromTask(@PathVariable(value = "taskId") Long taskId,
//			@PathVariable(value = "employeeId") Long employeeId) {
//		Task task = taskRepository.findById(taskId)
//				.orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + taskId));
//
//		task.removeEmployee(employeeId);
//		taskRepository.save(task);
//		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//	}

	// create employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist withid: " + id));
		return ResponseEntity.ok(employee);
	}

	// update employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {

		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

		employee.setEmployeeFirstName(employeeDetails.getEmployeeFirstName());
		employee.setEmployeeLastName(employeeDetails.getEmployeeLastName());
		employee.setEmployeeEmail(employeeDetails.getEmployeeEmail());
		employee.setEmployeeContact(employeeDetails.getEmployeeContact());
		employee.setEmployeeLocation(employeeDetails.getEmployeeLocation());
		employee.setEmployeeRole(employeeDetails.getEmployeeRole());
		employee.setEmployeeDept(employeeDetails.getEmployeeDept());

		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	// delete employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
