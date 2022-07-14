package com.urbanpiping.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.urbanpiping.springboot.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

//	@Query("SELECT t FROM TASKS t JOIN TASKS_EMPLOYEES te ON t.task_id = te.task_id WHERE te.emp_id=?1")
//	List<Task> findTasksByEmployeesId(Long employeeId);

}
