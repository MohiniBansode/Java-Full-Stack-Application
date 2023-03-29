import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMIPlanEntity } from 'src/app/emi-plan-entity';
import { EMIPlanService } from 'src/app/EMI_Service/emi-plan.service';

@Component({
  selector: 'app-create-emi-plan',
  templateUrl: './create-emi-plan.component.html',
  styleUrls: ['./create-emi-plan.component.css']
})
export class CreateEMIPlanComponent implements OnInit 
{
  emiplan: EMIPlanEntity = new EMIPlanEntity();

  constructor(private emiService: EMIPlanService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmiPlan()
  {
    this.emiService.createEmiPlan(this.emiplan).subscribe( data =>
      {
        console.log(data);
        this.goToEmiPlanList();
      },
      error => console.log(error));
  }

  goToEmiPlanList()
  {
    this.router.navigate(['/emiplans']);
  }

  onSubmit()
  {
    console.log(this.emiplan);
    this.saveEmiPlan();
    alert("Submitted Successfully");
  }
}
