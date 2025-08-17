package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	public List<Student> findByFirstname(String firstname);
	public List<Student> findByLastname(String lastname);

}
