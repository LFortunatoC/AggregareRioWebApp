import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData, IItem } from '../dataparameters';
import { Router} from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-full-picture',
  templateUrl: './full-picture.component.html',
  styleUrls: ['./full-picture.component.css']
})
export class FullPictureComponent implements OnInit {
  
  name="fullPicture";
  fullPictures:any;
  
  selectedItem: IItem;
  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentItem.subscribe(parameters => this.selectedItem = parameters);
  }

  
  ngOnInit(): void {

  }

}
