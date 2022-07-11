package com.urbanpiping.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.urbanpiping.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
//	@Query("SELECT e FROM EMPLOYEES e JOIN TASKS_EMPLOYEES te ON e.emp_id = te.emp_id WHERE te.task_id = ?1")
//	List<Employee> findEmployeesByTasksId(Long taskId);

}