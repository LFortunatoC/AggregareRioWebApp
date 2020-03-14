import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-infobartitle',
  templateUrl: './infobartitle.component.html',
  styleUrls: ['./infobartitle.component.css']
})
export class InfobartitleComponent implements OnInit {

  title = 'AggregareRioWebApp';
  public name = 'Test1';

  @Input() public parentData;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  

}
