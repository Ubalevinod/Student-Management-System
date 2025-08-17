package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Email;
import com.service.EmailService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmailController {
	
	@Autowired
	EmailService emailservice;
	
	@PostMapping("/addemail")
	public String addemaildetails(@RequestBody Email e) {
		return emailservice.addemial(e);
	}
	
	@GetMapping("/getemail")
	public List<Email> getalltheemails()
	{
		return emailservice.getallemail();
	}
	
	@DeleteMapping("/deleteemail/{emailid}")
	public String deleteemailbyid(@PathVariable int emailid) {
		return emailservice.deleteEmail(emailid);
	}
	
	
	

}
