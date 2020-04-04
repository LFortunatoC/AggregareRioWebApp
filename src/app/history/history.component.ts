import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  history: any;
  parameters : IData;
  table: number;


  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
  }
 
  getOrder (parameters){
    this.service.getOrder (parameters)
    .subscribe(data => {
       this.history = data;
    }); 
   }

  ngOnInit(): void {
    this.table = this.parameters.tableNumber;
    this.getOrder(this.parameters)
  }
  
}
