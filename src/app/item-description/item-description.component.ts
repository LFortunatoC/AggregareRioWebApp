import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData, IItem } from '../dataparameters';
import { Router} from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  public name = 'Item Description';
 
  parameters : IData;
  selectedItem: IItem;
  items: any;
  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
  }


  getItems (parameters){
    this.service.getItems (parameters)
    .subscribe(data => {
       this.items = data;
    }); 
   }


   selectItem(item: any) {
     this.selectedItem = item;
     this.data.changeItem(this.selectedItem);
      this.router.navigateByUrl('/item-description'); 
   }


  ngOnInit(): void {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
    this.getItems(this.parameters);
  }


}
