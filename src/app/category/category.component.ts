import { Component, OnInit } from '@angular/core';
import {CommunicationService} from './../communication.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title = 'AggregareRioWebApp';
  public name = 'Category';
  categories: any;
<<<<<<< HEAD
  lang_id = 3 ;
=======
  lang_id = 2 ;
>>>>>>> issue-add-routing
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
