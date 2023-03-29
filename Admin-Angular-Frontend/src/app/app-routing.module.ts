import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEMIPlanComponent } from './EMI_Components/create-emi-plan/create-emi-plan.component';
import { EMIPlanDetailsComponent } from './EMI_Components/emi-plan-details/emi-plan-details.component';
import { EMIPlanListComponent } from './EMI_Components/emi-plan-list/emi-plan-list.component';
import { UpdateEMIPlanComponent } from './EMI_Components/update-emi-plan/update-emi-plan.component';

const routes: Routes = [
  {path: 'emiplans', component: EMIPlanListComponent},
  {path: 'create-emiplan', component: CreateEMIPlanComponent},
  {path: '', redirectTo: 'emiplans', pathMatch: 'full'},
  {path: 'update-emiplan/:id', component: UpdateEMIPlanComponent},
  {path: 'emiplan-details/:id', component: EMIPlanDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
