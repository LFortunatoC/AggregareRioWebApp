import { items } from './../order/order';
import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title = 'AggregareRioWebApp';
  public name = 'Category';
 
  parameters : IData;
  categories: any;

  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    
   }

   getCategories (parameters){
    this.service.getCategories (parameters)
    .subscribe(data => {
       this.categories = data;
    }); 
   }

   selectItem(category_id: number) {
    this.parameters.category_id = category_id;
    this.data.changeParameters(this.parameters);
    this.router.navigateByUrl('/subcategory');
   }
   

  ngOnInit(): void {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
    this.getCategories(this.parameters);
  }

}
