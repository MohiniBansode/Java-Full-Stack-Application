import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMIPlanEntity } from 'src/app/emi-plan-entity';
import { EMIPlanService } from 'src/app/EMI_Service/emi-plan.service';

@Component({
  selector: 'app-update-emi-plan',
  templateUrl: './update-emi-plan.component.html',
  styleUrls: ['./update-emi-plan.component.css']
})
export class UpdateEMIPlanComponent implements OnInit 
{
  id: number;
  emiplan: EMIPlanEntity = new EMIPlanEntity();

  constructor(private emiService: EMIPlanService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];
    this.emiService.getEmiPlanById(this.id).subscribe(data =>
      {
        this.emiplan = data;
      },
      error => console.log(error));
  }

  onSubmit()
  {
    this.emiService.updateEmiPlan(this.id, this.emiplan).subscribe(data =>
      {
        this.goToEmiPlanList();
        alert("Updated Successfully");
      },
      error => console.log(error));
  }

  goToEmiPlanList()
  {
    this.router.navigate(['/emiplans']);
  }

}
