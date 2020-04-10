import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData, IItem } from '../dataparameters';
import { Router} from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {Location} from '@angular/common';

@Component({
  selector: 'app-full-picture',
  templateUrl: './full-picture.component.html',
  styleUrls: ['./full-picture.component.css']
})
export class FullPictureComponent implements OnInit {
  
  
  fullPictures:any;
  
  selectedItem: IItem;
  constructor(private service : CommunicationService, private data: DataService, private router: Router, private location: Location) { 
    this.data.currentItem.subscribe(parameters => this.selectedItem = parameters);
  }

  returnToItem() {
    this.location.back();
  }
  ngOnInit(): void {

  }

}
