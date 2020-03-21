import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  menu_id=3;
  name="Cover";
  covers:any;
  lang_id:any;
  constructor(private service: CommunicationService) {
    this.getCovers(this.menu_id)
   }

   getCovers(menu_id){
     this.service.getCovers(menu_id)
     .subscribe(data => {
       this.covers = data;
     })
   }

  startApp() {
    window.location.href="./category";
  }

  ngOnInit(): void {
  }

}
