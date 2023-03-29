import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMIPlanEntity } from 'src/app/emi-plan-entity';
import { EMIPlanService } from 'src/app/EMI_Service/emi-plan.service';

@Component({
  selector: 'app-emi-plan-list',
  templateUrl: './emi-plan-list.component.html',
  styleUrls: ['./emi-plan-list.component.css']
})
export class EMIPlanListComponent implements OnInit 
{
  emiplans: EMIPlanEntity[];
  
  constructor(private emiService: EMIPlanService, private router: Router) { }

  ngOnInit(): void 
  {
    this.getEmiplans();
  }

  private getEmiplans()
  {
    this.emiService.getEmiPlanList().subscribe(data =>
      {
        this.emiplans = data;
      });
  }

  updateEmiPlan(id: number)
  {
    this.router.navigate(['update-emiplan', id]);
  }

  deleteEmiPlan(id: number)
  {
    this.emiService.deleteEmiPlan(id).subscribe(data =>
      {
        console.log(data);
        this.getEmiplans();
      })
  }

  viewEmiPlanDetails(id: number)
  {
    this.router.navigate(['emiplan-details', id]);
  }
}
