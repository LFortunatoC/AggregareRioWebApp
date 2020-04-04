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


  preOrders: any;
  parameters : IData;

  pree:any;
  pre:IPreOrder;
  
  table: number;
  item_qty: any;
  index: any;
  

  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
     this.data.currentPreOrder.subscribe(parameters => this.preOrders = parameters);
     this.data.currentPreOrder.subscribe(preorder => this.pree = preorder);

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
    this.item_qty=this.pree.itemList[this.index].qty
    
  }

  addToOrder(i) {
    let item : IPreOrderItem = {item_id: 0, qty: 0, currPrice: 0 };
    this.index = this.getItemListIndex(i);
     
 if(this.item_qty==0){
   if(this.index>=0){
  this.pree.itemList[this.index].qty = this.item_qty;
}
//this.item_qty= 0 ->colocar uma mensagem escolha a quantidade desejada
else{}
 }
 else{
 
 if(this.index>=0){
    this.pree.itemList[this.index].qty = this.item_qty;
}
else{
    item.item_id = i;
    item.qty = this.item_qty;
   
    this.pree.itemList.push(item);
     }
  
    this.data.changePreOrder(this.pree);
  }
    console.dir( this.pree.itemList); 
  }


   getItemListIndex(id){
    return this.pree.itemList.findIndex(x=>x.item_id===id)   
  }

  

  updateQtty($event) {
    this.item_qty=$event;
  }

}
