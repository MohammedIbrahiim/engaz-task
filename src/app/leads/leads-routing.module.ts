import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { PotentialDuplicatesComponent } from './potential-duplicates/potential-duplicates.component';


const routes: Routes = [

  { path: '', redirectTo: '/leads', pathMatch: 'full' },
  {path:'leads' , component:AllLeadsComponent},
  {path:'leads/:lead_id/potential-duplicates' , component:PotentialDuplicatesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
