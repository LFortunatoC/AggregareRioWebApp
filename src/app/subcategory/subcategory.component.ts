import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  name = "Sub Categories";

  subCategories: any;

  parameters : IData;

  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
   }

   getSubCategories (parameters){
    this.service.getSubCategories (parameters)
    .subscribe(data => {
       this.subCategories = data;
    }); 
   }

  selectItem(subCategory_id: number) {
    this.parameters.subCategory_id = subCategory_id;
    this.data.changeParameters(this.parameters);
    console.dir(this.parameters);
    this.router.navigateByUrl('/item');
    }


  ngOnInit(): void {

    console.dir(this.parameters);
    this.getSubCategories(this.parameters)

  }

}
