import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name = "Order";
  order: any;
  order_id = 2;
  constructor(private service : CommunicationService) {
    this.getOrder(this.order_id)
  
   }


   getOrder (id){
    this.service.getOrder (id)
    .subscribe(data => {
       this.order = data;
    }); 
   }

  ngOnInit(): void {
  }

}
