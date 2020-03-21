import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';


@Component({
  selector: 'app-itemdescription',
  templateUrl: './itemdescription.component.html',
  styleUrls: ['./itemdescription.component.css']
})
export class ItemdescriptionComponent implements OnInit {

 name = "ItemDesc"; //should be changed for item ID retrived from table

  ItemDesc: any;
  parameters = {
      id: 1,
      lang_id: 2,
      menu_id: 3
    };

  constructor(private service : CommunicationService) { 
    this.getItemDesc(this.parameters)
  }


  getItemDesc (parameters){
    this.service.getItemDesc (parameters)
    .subscribe(data => {
       this.ItemDesc = data;
    }); 
   }

  ngOnInit(): void {
  }

}
