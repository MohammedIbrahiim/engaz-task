import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsRoutingModule } from './leads-routing.module';
import { DefultStringPipe } from '../pipes/defult-string.pipe';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { PotentialDuplicatesComponent } from './potential-duplicates/potential-duplicates.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AllLeadsComponent,
    PotentialDuplicatesComponent,
    DefultStringPipe
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class LeadsModule { }
