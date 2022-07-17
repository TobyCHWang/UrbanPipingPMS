package com.urbanpiping.springboot.controller;

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
import com.urbanpiping.springboot.model.Project;
import com.urbanpiping.springboot.repository.ProjectRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth/")
public class ProjectController {

	@Autowired
	private ProjectRepository projectRepository;

	// get all project
	@GetMapping("/projects")
	public List<Project> getAllProject() {
		return projectRepository.findAll();
	}

	// create project rest api
	@PostMapping("/projects")
	public Project createProject(@RequestBody Project project) {
		return projectRepository.save(project);
	}

	// get project by id restapi
	@GetMapping("/projects/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist withid: " + id));
		return ResponseEntity.ok(project);
	}

	// update project rest api
	@PutMapping("/projects/{id}")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {

		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id: " + id));

		Calendar start = Calendar.getInstance();
		start.setTime(projectDetails.getProjectStartDate());
		start.add(Calendar.DATE, -1);
		
		Calendar due = Calendar.getInstance();
		due.setTime(projectDetails.getProjectDueDate());
		due.add(Calendar.DATE, -1);
		
		project.setProjectName(projectDetails.getProjectName());
		project.setProjectDesc(projectDetails.getProjectDesc());
		project.setProjectStartDate(start.getTime());
		project.setProjectDueDate(due.getTime());
		project.setProjectCity(projectDetails.getProjectCity());
		project.setProjectStreet(projectDetails.getProjectStreet());
		project.setProjectProv(projectDetails.getProjectProv());
		project.setProjectPostalCode(projectDetails.getProjectPostalCode());
		project.setProjectStatus(projectDetails.getProjectStatus());

		Project updatedProject = projectRepository.save(project);
		return ResponseEntity.ok(updatedProject);
	}

	// delete project rest api
	@DeleteMapping("/projects/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Project not exist with id: " + id));
		projectRepository.delete(project);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
