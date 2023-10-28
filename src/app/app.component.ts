import { Component, OnInit } from '@angular/core';
import { LeadsService } from './services/leads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-leads';
  constructor(private _LeadsService:LeadsService){}

  ngOnInit(): void {}

}
