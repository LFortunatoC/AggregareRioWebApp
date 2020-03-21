import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name = "Items"; //should be changed for a name retrived from table

  items: any;
  parameters = {
      lang_id: 1,
      subCategory_id : 3,
      menu_id: 3
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
