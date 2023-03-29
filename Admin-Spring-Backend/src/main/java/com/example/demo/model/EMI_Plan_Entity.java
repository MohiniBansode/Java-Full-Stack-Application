package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EMI_Plan_Entity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Vehicle_Name")
	private String vehicleName;
	
	@Column(name = "Loan_Amount")
	private int loanAmount;
	
	@Column(name = "Maximum_Tenure")
	private int maximumTenure;
	
	public EMI_Plan_Entity()
	{
		
	}

	public EMI_Plan_Entity(String vehicleName, int loanAmount, int maximumTenure) 
	{
		super();
		this.vehicleName = vehicleName;
		this.loanAmount = loanAmount;
		this.maximumTenure = maximumTenure;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getVehicleName() {
		return vehicleName;
	}

	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}

	public int getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(int loanAmount) {
		this.loanAmount = loanAmount;
	}

	public int getMaximumTenure() {
		return maximumTenure;
	}

	public void setMaximumTenure(int maximumTenure) {
		this.maximumTenure = maximumTenure;
	}
	
	
	
}
