import { IPreOrder, IPreOrderItem, ItemList } from './../dataparameters';
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


  preOrder: IPreOrder;
  parameters : IData;


  table: number;
  item_qty: any;
  index: any;
  response:any;
  

  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
     this.data.currentPreOrder.subscribe(parameters => this.preOrder = parameters);
  }

  ngOnInit(): void {
    this.table = this.parameters.tableNumber;  
  }

  addToOrder() {
    let item : IPreOrderItem = {item_id: 0, qty: 0, currPrice: 0, title:'' };
    let removedItems: Array<IPreOrderItem>;
    this.preOrder.itemList.forEach((element,index) => {
      if (element.qty == 0) {
         // removedItems.push(element);
          this.preOrder.itemList.splice(this.index,1);  // qtty =o remove item from PreOrder
      }   
    });
    
    this.data.changePreOrder(this.preOrder);

  if (this.preOrder.itemList === undefined || this.preOrder.itemList.length == 0) {
      this.parameters.hasOrdertoPlace=false;
      this.data.changeParameters(this.parameters);
  } else {
    this.postOrder();
  }
}

   getItemListIndex(id){
    return this.preOrder.itemList.findIndex(x=>x.item_id===id)   
  }

  updateQtty($event, idx) {
    this.preOrder.itemList[idx].qty=$event;
  }

  postOrder (): any{
    this.service.postPreOrder(this.preOrder)
    .subscribe(data => {
       this.response = data;
       this.preOrder.order_id=this.response.order.id;
       this.data.changePreOrder(this.preOrder);
       this.router.navigateByUrl('/order');
    }); 
   }


}
