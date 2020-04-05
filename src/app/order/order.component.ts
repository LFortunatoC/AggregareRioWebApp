import { IPreOrder } from './../dataparameters';
import { Component, OnInit } from '@angular/core';
import { CommunicationService} from '../communication/communication.service';
import { DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public name = "Order";

  order: any;
  parameters : IData;
  table: number;
  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
    this.data.currentPreOrder.subscribe(parameters => this.order = parameters);

   }


   getOrder (parameters){
    this.service.getOrder (parameters)
    .subscribe(data => {
       this.order = data;
     }); 
   }

  ngOnInit(): void {
   this.table = this.parameters.tableNumber;
  }

  getGrandTotal() {
    let grandTotal = 0;
    this.order.itemList.forEach(element => {
      grandTotal = grandTotal + (element.currPrice * element.qty); 
    });
    
    return grandTotal;
  }

  getTotalItems() {
    let numItems = 0;
    this.order.itemList.forEach(element => {
      numItems = numItems + element.qty; 
    });
    
    return numItems;
  }

}
