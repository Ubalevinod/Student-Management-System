package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Student;
import com.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository resp;
	
	public String addstud(Student s) {
		resp.save(s);
		return "Student record added successfully";
	}
	
	public Student findbystudid(int sid) {
		return resp.findById(sid) .orElse(null);
		}
	
	public List<Student> findAllStud(){
		return resp.findAll();
	}
	
	public String deletestudbyid(int sid) {
		Student existingstud = resp.findById(sid) .orElse(null);
		if(existingstud == null) {
			return "No record found wrong student id";
		}else {
			resp.deleteById(sid);
			return "Student record deleted successfully";
		}
	}
	
	public String updatestud(int sid,Student newstud) {
		Student existingstud = resp.findById(sid) .orElse(null);
		if(existingstud==null) {
			return "Student id does not match with any record. Updation fail";
		}
		if(newstud.getFirstname()==null&&newstud.getLastname()==null&&
				newstud.getAge()==0&&newstud.getSclass()==null&& 
				newstud.getPercentage()==0.0&&newstud.getGender()==null&&
				newstud.getEmail()==null&&newstud.getContactno()==0&&
				newstud.getDob()==null&&newstud.getAddress()==null) {
			return "No new record found for updation";
		}
		if(newstud.getFirstname()!=null) {
			existingstud.setFirstname(newstud.getFirstname());
		}
		if(newstud.getLastname()!=null) {
			existingstud.setLastname(newstud.getLastname());
		}
		if(newstud.getAge()!=0) {
			existingstud.setAge(newstud.getAge());
		}
		if(newstud.getSclass()!=null) {
			existingstud.setSclass(newstud.getSclass());
		}
		if(newstud.getPercentage()!=0.0) {
			existingstud.setPercentage(newstud.getPercentage());
		}
		if(newstud.getGender()!=null) {
			existingstud.setGender(newstud.getGender());
		}
		if(newstud.getEmail()!=null) {
			existingstud.setEmail(newstud.getEmail());
		}
		if(newstud.getContactno()!=0) {
			existingstud.setContactno(newstud.getContactno());
		}
		if(newstud.getDob()!=null) {
			existingstud.setDob(newstud.getDob());
		}
		if(newstud.getAddress()!=null) {
			existingstud.setAddress(newstud.getAddress());
		}
		resp.save(existingstud);
		return "Student record updated successfully";		
	}
	
	public List<Student> findbyfirstname(String firstname){
		return resp.findByFirstname(firstname);
	}
	public List<Student> findbylastname(String lastname){
		return resp.findByLastname(lastname);
	}

}
