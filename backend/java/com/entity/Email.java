package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Email {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int emailid;
	String name;
	String email;
	String subject;
	String message;
	public Email() {
		super();
	}
	public Email(int emailid, String name, String email, String subject, String message) {
		super();
		this.emailid = emailid;
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.message = message;
	}
	public int getEmailid() {
		return emailid;
	}
	public void setEmailid(int emailid) {
		this.emailid = emailid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
