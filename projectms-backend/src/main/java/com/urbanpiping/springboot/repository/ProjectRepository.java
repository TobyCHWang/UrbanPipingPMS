package com.urbanpiping.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.urbanpiping.springboot.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
