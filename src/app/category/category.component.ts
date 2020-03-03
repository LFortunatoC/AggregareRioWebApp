import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;
  lang_id = 1 ;
  constructor(service: CategoryService) {
    this.categories = service.getCategories(this.lang_id);
   }


  ngOnInit(): void {

  }

}
