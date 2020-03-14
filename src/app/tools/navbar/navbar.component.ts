import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private location: Location) { }
  

  ngOnInit(): void {
  }

  btBack(){
    this.location.back();
  }

  btMenu(){
    window.location.href='https://angular.io/start';
  }

}
