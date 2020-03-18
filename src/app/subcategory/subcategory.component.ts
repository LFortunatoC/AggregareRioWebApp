import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  name = "Sub Categories";

  subCategories: any;
  
    lang_id = 2;

  
  constructor(private service : CommunicationService) {
    this.getSubCategories(this.lang_id)
   }

   getSubCategories (lang_id){
    this.service.getSubCategories (lang_id)
    .subscribe(data => {
       this.subCategories = data;
    }); 
   }

  selectItem() {
    window.location.href="./item";
    }


  ngOnInit(): void {
  }

}
