package com.urbanpiping.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.urbanpiping.springboot.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
