import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-full-picture',
  templateUrl: './full-picture.component.html',
  styleUrls: ['./full-picture.component.css']
})
export class FullPictureComponent implements OnInit {

  item_id=3;
  menu_id=3;
  name="fullPicture";
  fullPictures:any;
  constructor(private service: CommunicationService) { 
    this.getFullPictures(this.menu_id)
  }

  getFullPictures(item_id){
    this.service.getFullPictures(item_id)
    .subscribe(data=>{
      this.fullPictures = data;
    })
  }

  ngOnInit(): void {
  }

}
