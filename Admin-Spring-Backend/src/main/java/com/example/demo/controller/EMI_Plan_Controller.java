package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.EMI_Plan_Entity;
import com.example.demo.repository.EMI_Plan_Repository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/v1/")
public class EMI_Plan_Controller 
{
	@Autowired
	private EMI_Plan_Repository emiPlanRepository;
	
	@GetMapping("/getEmiPlanList")
	public List<EMI_Plan_Entity> getAllEMI_Plans()
	{
		return emiPlanRepository.findAll();
	}
	
	@PostMapping("/addEmiPlanToList")
	public EMI_Plan_Entity createEmiPlan(@RequestBody EMI_Plan_Entity emiplan)
	{
		return emiPlanRepository.save(emiplan);
	}
	
	@GetMapping("/getEmiPlanByIdfromList/{id}")
	public ResponseEntity<EMI_Plan_Entity> getEmiPlanById(@PathVariable Long id)
	{
		EMI_Plan_Entity emiplan = emiPlanRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("EMI Plan not exist with this id :" + id));
		
		return ResponseEntity.ok(emiplan);
	}
	
	@PutMapping("/updateEmiPlanInList/{id}")
	public ResponseEntity<EMI_Plan_Entity> updateEmiPlan(@PathVariable Long id, @RequestBody EMI_Plan_Entity emiplandetails)
	{
		EMI_Plan_Entity emiplan = emiPlanRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("EMI Plan not exist with this id :" + id));
		
		emiplan.setVehicleName(emiplandetails.getVehicleName());
		emiplan.setLoanAmount(emiplandetails.getLoanAmount());
		emiplan.setMaximumTenure(emiplandetails.getMaximumTenure());
		
		EMI_Plan_Entity updatedEmiPlan = emiPlanRepository.save(emiplan);
		return ResponseEntity.ok(updatedEmiPlan);
	}
	
	@DeleteMapping("/deleteEmiPlanFromList/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmiPlan(@PathVariable Long id)
	{
		EMI_Plan_Entity emiplan = emiPlanRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("EMI Plan not exist with this id :" + id));
		
		emiPlanRepository.delete(emiplan);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}


