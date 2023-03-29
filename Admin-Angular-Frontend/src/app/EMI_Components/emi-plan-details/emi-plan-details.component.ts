import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMIPlanEntity } from 'src/app/emi-plan-entity';
import { EMIPlanService } from 'src/app/EMI_Service/emi-plan.service';

@Component({
  selector: 'app-emi-plan-details',
  templateUrl: './emi-plan-details.component.html',
  styleUrls: ['./emi-plan-details.component.css']
})
export class EMIPlanDetailsComponent implements OnInit 
{
  id: number
  emiplan: EMIPlanEntity

  constructor(private route: ActivatedRoute, private emiService: EMIPlanService) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];
    this.emiplan = new EMIPlanEntity();
    this.emiService.getEmiPlanById(this.id).subscribe(data =>
      {
        this.emiplan = data;
      });
  }

}
