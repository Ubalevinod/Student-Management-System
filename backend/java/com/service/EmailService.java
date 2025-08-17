package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Email;
import com.repository.EmailRepository;

@Service
public class EmailService {
	
	@Autowired
	EmailRepository emresp;
	
	public String addemial(Email e) {
		emresp.save(e);
		return "Record added successfully";		
	}
	
	public List<Email> getallemail(){
		return emresp.findAll();
	}
	
	public String deleteEmail(int emailId) {
        if (emresp.existsById(emailId)) {
            emresp.deleteById(emailId);
            return "Record deleted successfully";
        } else {
            return "Email not found!";
        }
    }

}
