import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import { Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {


  name="Cover";
  sub : any;
  cover: any;
  parameters : IData;


  constructor(private service : CommunicationService, private data: DataService, private router: Router, private route: ActivatedRoute) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
   }

   getCover (parameters){
    this.service.getMenubyId (parameters)
    .subscribe(data => {
       this.cover = data;
    }); 
   }

   getMenubyId

  startApp() {
    this.router.navigateByUrl('/category');
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.parameters.menu_id = params['menu_id']||this.parameters.menu_id;
    this.parameters.tableNumber = params['table_num']||this.parameters.tableNumber ;
    this.data.changeParameters(this.parameters);
    this.getCover(this.parameters);

    });

  }

}
