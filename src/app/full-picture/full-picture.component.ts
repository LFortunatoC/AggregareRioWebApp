import { items } from './../order/order';
import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import { Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { IFull } from '../dataparameters';


@Component({
  selector: 'app-full-picture',
  templateUrl: './full-picture.component.html',
  styleUrls: ['./full-picture.component.css']
})
export class FullPictureComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // id=3;
  // //menu_id=3;
  // //name="fullPicture";
  // //fullPictures:any;
  // //full-picture:any;
  // name='';
  // sub : any;
  // cover: any;
  // items:any;
  // parameters : IFull;
  
  // constructor(private service : CommunicationService, private data: DataService, private router: Router, private route: ActivatedRoute) {
  //   this.data.currentItem.subscribe(parameters => this.parameters = parameters) { 
  //   // this.getFullPictures(this.menu_id)
  // }

  // getItems(parameters){
  //   this.service.getItems(id)
  //   .subscribe(data=>{
  //     this.items = data;
  //   })
  // }

  // ngOnInit(): void {

  //   this.data.currentItem.subscribe(parameters => this.parameters = parameters);
  //   this.getItems(this.parameters);

  //   // this.sub = this.route.params.subscribe(params => {
  //   //   this.parameters.menu_id = params['menu_id']||this.parameters.menu_id;
  //   //   this.parameters.tableNumber = params['table_num']||this.parameters.tableNumber ;
  //   //   this.data.changeParameters(this.parameters);
  //   //   this.getFullPictures(this.parameters);

  // }


//  ngOnInit(): void {
//   this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
//     this.getItems(this.parameters);
//     throw new Error("Method not implemented.");
//   }
}
