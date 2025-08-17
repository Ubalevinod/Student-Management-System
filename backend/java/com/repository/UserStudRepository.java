package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.UserStud;

@Repository
public interface UserStudRepository extends JpaRepository<UserStud,Integer> {
	
	public UserStud findByUsername(String username);

}
