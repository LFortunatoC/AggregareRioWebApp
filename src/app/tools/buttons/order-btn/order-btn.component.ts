import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../data.service';
import { IData } from '../../../dataparameters';
import { Router} from '@angular/router'

@Component({
  selector: 'app-order-btn',
  templateUrl: './order-btn.component.html',
  styleUrls: ['./order-btn.component.css']
})
export class OrderBtnComponent implements OnInit {

  // bttOrderText = " Order ";
  parameters : IData;

  constructor(private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
  }

  

  ngOnInit(): void {
  }

  goToPre() {
    if(this.parameters.hasOrdertoPlace === true) {
          this.router.navigateByUrl('/pre-order'); 
    }
  }

}
