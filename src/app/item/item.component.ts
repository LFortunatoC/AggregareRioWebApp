import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: any;
  parameters = {
      lang_id: 1,
      subCategory_id : 1,
      menu_id: 4
    };

  constructor(private service : CommunicationService) { 
    this.getItems(this.parameters)
  }


  getItems (parameters){
    this.service.getItems (parameters)
    .subscribe(data => {
       this.items = data;
    }); 
   }


  ngOnInit(): void {
  }

}
