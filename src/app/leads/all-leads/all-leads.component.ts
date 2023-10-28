import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { LeadsService } from 'src/app/services/leads.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import {Lead} from'../../interface/lead'

import {MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: Lead[] = [];
@Component({
  selector: 'app-all-leads',
  templateUrl: './all-leads.component.html',
  styleUrls: ['./all-leads.component.scss']
})


export class AllLeadsComponent implements OnInit , AfterViewInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'source','cell_phone','home_phone','action'];
  dataSource = new MatTableDataSource<Lead>(ELEMENT_DATA);
  constructor(private _Router:Router ,private _ShareDataService:ShareDataService,private _LeadsService:LeadsService){}
    ngOnInit(): void {
    this.getAllLeads()
  }

  ngAfterViewInit() {
  }


  // ============================================================== get all data leads ==================================================
  getAllLeads(){
      this._LeadsService.getLeads().subscribe(res=>{
        this.dataSource = new MatTableDataSource<Lead>(res);        
        this.dataSource.paginator = this.paginator;
    
        sessionStorage.setItem('leadsArray',JSON.stringify (res))
        this._ShareDataService.data.next(res)
      })
}
  // ============================================================== navigate to potential-duplicates and take id by click ==================================================
  getLeadId(id:string){
    this._Router.navigate([`/leads/${id}/potential-duplicates`])

  }


}

