import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPreOrder } from '../dataparameters';

@Component({
  selector: 'app-button-qt',
  templateUrl: './button-qt.component.html',
  styleUrls: ['./button-qt.component.css']
})
export class ButtonQtComponent implements OnInit {

  @Input() quantity: number;
  @Output() newquantity = new EventEmitter<number>();
    
  pree:any;
  pre:IPreOrder;
 
  qt: number;
  showQt = false;

  constructor() { }

  ngOnInit(): void {
    this.qt = this.quantity;
  }


  onShowPlusQt(){    
       this.showQt = true;
       this.qt = this.qt + 1;
       this.newquantity.emit(this.qt);   
  }

  onShowLessQt(){
    this.showQt = true;
    if(this.qt>0){
      this.qt = this.qt - 1;
    } else {
      this.qt = this.qt =0;
    }
    this.newquantity.emit(this.qt);  
}


}
