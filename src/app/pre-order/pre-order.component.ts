import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit {


  preOrders: any;
  parameters : IData;
  table: number;

  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
     this.data.currentPreOrder.subscribe(parameters => this.preOrders = parameters);

  }

  
  getOrder (parameters){
    this.service.getOrder (parameters)
    .subscribe(data => {
       this.preOrders = data;
    }); 
   }

  ngOnInit(): void {
    this.table = this.parameters.tableNumber;
    this.getOrder(this.parameters)
  }

}
