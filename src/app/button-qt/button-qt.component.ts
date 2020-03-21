import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-qt',
  templateUrl: './button-qt.component.html',
  styleUrls: ['./button-qt.component.css']
})
export class ButtonQtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ///qt = "quantidade informada pelo user"

  qt = 0;
  showQt = false;

  onShowPlusQt(){
    
       this.showQt = true;
       return this.qt = this.qt + 1;
     

  }

  onShowLessQt(){
    this.showQt = true;
    if(this.qt>0){
    return this.qt = this.qt - 1;}
    else
    {return this.qt = this.qt =0;}
}



}
