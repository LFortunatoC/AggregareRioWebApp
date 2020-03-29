import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import { Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {


  public name='Welcome!';
  sub : any;
  cover: any;
  parameters : IData;

  getCover (parameters){
    this.service.getMenubyId (parameters)
    .subscribe(data => {
       this.cover = data;
       this.name = this.cover.title;
    }); 
   }

  constructor(private service : CommunicationService, private data: DataService, private router: Router, private route: ActivatedRoute) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
  }
   
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
