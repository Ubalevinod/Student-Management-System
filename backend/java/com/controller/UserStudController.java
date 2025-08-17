package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.UserStud;
import com.service.UserStudService;
import com.userstuddto.UserStudDTO;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserStudController {
	
	@Autowired
	UserStudService uservice;
	
	@PostMapping("/register")
	public String register(@RequestBody UserStud u) {
		return uservice.registration(u);
	}

	@PostMapping("/login")
	public ResponseEntity<?>login(@RequestBody UserStudDTO dto){
		if ("admin".equals(dto.getUsername()) && "admin@1234".equals(dto.getPassword()))
 {
			UserStud adminuser = new UserStud();
			adminuser.setUsername("admin");
			adminuser.setPassword("admin@1234");
			adminuser.setRole("admin");
			return ResponseEntity.ok(adminuser);
		}else {
			UserStud u = uservice.login(dto);
			if(u!=null) {
				return ResponseEntity.ok(u);
			}
			else {
				return ResponseEntity
						.status(HttpStatus.UNAUTHORIZED)
						.body("Invalid Username or Password");
			}
		}
	}
}
