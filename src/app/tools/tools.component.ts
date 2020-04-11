import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  public name='Welcome!';

  sub : any;
  cover: any;

  
  ngOnInit(): void {
  }

}
