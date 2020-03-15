import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {CommunicationService} from './../communication.service';
>>>>>>> issue-add-routing

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
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
>>>>>>> issue-add-routing

  ngOnInit(): void {
  }

}
