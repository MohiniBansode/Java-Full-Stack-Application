import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EMIPlanListComponent } from './EMI_Components/emi-plan-list/emi-plan-list.component';
import { CreateEMIPlanComponent } from './EMI_Components/create-emi-plan/create-emi-plan.component';
import { FormsModule } from '@angular/forms';
import { UpdateEMIPlanComponent } from './EMI_Components/update-emi-plan/update-emi-plan.component';
import { EMIPlanDetailsComponent } from './EMI_Components/emi-plan-details/emi-plan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EMIPlanListComponent,
    CreateEMIPlanComponent,
    UpdateEMIPlanComponent,
    EMIPlanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
