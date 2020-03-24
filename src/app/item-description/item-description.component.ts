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
  itemsDesc: any;

  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
  }

   selectItem(itemsDesc: any) {
      this.router.navigateByUrl('/full-picture'); 
   }


  ngOnInit(): void {
    this.data.currentItem.subscribe(parameters => this.selectedItem = parameters);
    console.dir(this.selectedItem);
  }


}
