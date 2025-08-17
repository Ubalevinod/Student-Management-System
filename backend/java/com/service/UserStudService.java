package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.UserStud;
import com.repository.UserStudRepository;
import com.userstuddto.UserStudDTO;

@Service
public class UserStudService {
	
	@Autowired
	UserStudRepository uresp;
	
	public String registration(UserStud u) {
		UserStud u1= uresp.findByUsername(u.getUsername());
		if(u1==null) {
			uresp.save(u);
			return "User Registration successful";
		}else {
			return "Please enter another username";
		}
	}
	
	public UserStud login(UserStudDTO dto) {
		UserStud u = uresp.findByUsername(dto.getUsername());
		if(u!=null) {
			if(u.getPassword().equals(dto.getPassword())) {
				return u;
			}
		}
		return null;
	}

}
