import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;
  lang_id = 1 ;
  constructor(private service : CommunicationService) {
     this.getCategories(this.lang_id)

   }

   getCategories (lang_id){
    this.service.getCategories (lang_id)
    .subscribe(data => {
       this.categories = data;
    }); 
   }

  ngOnInit(): void {
    
  }

}
