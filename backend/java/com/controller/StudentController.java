package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Student;
import com.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudentController {
	
	@Autowired
	StudentService service;
	
	@PostMapping("/add")
	public String addstudent(@RequestBody Student student) {
		return service.addstud(student);
	}
	
	@GetMapping("/{sid}")
	public Student findstudbyid(@PathVariable int sid) {
		return service.findbystudid(sid);
	}
	
	@GetMapping("/all")
	public List<Student> getstudent(){
		return service.findAllStud();
	}
	
	@DeleteMapping("/delete/{sid}")
	public String deletebystudid(@PathVariable int sid) {
		return service.deletestudbyid(sid);
	}
	
	@PutMapping("/update/{sid}")
	public String updatestudent(@PathVariable("sid") int sid,@RequestBody Student stud) {
		return service.updatestud(sid, stud);
	}

	@GetMapping("/firstname/{firstname}")
	public List<Student> findbyfirstname(@PathVariable String firstname){
		return service.findbyfirstname(firstname);
	}
	
	@GetMapping("/lastname/{lastname}")
	public List<Student> findbylastname(@PathVariable String lastname){
		return service.findbylastname(lastname);
	}
}
