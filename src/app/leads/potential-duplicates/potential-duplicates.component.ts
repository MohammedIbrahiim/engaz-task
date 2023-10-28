import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LeadsService } from 'src/app/services/leads.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import {Lead} from'../../interface/lead'
@Component({
  selector: 'app-potential-duplicates',
  templateUrl: './potential-duplicates.component.html',
  styleUrls: ['./potential-duplicates.component.scss']
})
export class PotentialDuplicatesComponent implements OnInit {
  leadsArrayPotentialDuplicates:Lead []=[]
  filteredUsers:Lead []=[]
  id:string = ''
  constructor (private _ActivatedRoute:ActivatedRoute,private _LeadsService:LeadsService,private _ShareDataService:ShareDataService){}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['lead_id']
    this.getPotentialDuplicates(this.id) 
  }
  
// ============================================== getPotentialDuplicates data ===================================
  getPotentialDuplicates(id:string){
    this._LeadsService.getPotentialDuplicates(id).subscribe((res)=>{
      this._ShareDataService.data.subscribe(leadsArray=>{
        if(leadsArray.length){
          this.leadsArrayPotentialDuplicates = leadsArray 
        }else {
         let userInvite  = sessionStorage.getItem('leadsArray')
          if(userInvite!== null){
            this.leadsArrayPotentialDuplicates = JSON.parse(userInvite)
          }
        }
        this.filteredUsers= this.leadsArrayPotentialDuplicates.filter((user: any) => res.includes(user.lead_id ) );  
  })    
})
  }


    // ============================================== update lead ===================================
    updateId(event:any,item:Lead){
      if(event.target.checked){
        this._LeadsService.updateLead(item,this.id).subscribe(res=>{          
        })      
      }
    }
}
