package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.EMI_Plan_Entity;

@Repository
public interface EMI_Plan_Repository extends JpaRepository<EMI_Plan_Entity, Long>
{
	
}
