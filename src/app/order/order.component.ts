import { IPreOrder } from './../dataparameters';
import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // name = "Order";

  order: any;
  parameters : IData;
 // preOrder: IPreOrder;
  

  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
    //this.data.currentPreOrder.subscribe(parameters => this.preOrder = parameters);
   }


   getOrder (parameters){
    this.service.getOrder (parameters)
    .subscribe(data => {
       this.order = data;
    }); 
   }

  ngOnInit(): void {
    this.getOrder(this.parameters)
  }

}
