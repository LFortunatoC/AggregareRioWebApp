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
  

  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
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
