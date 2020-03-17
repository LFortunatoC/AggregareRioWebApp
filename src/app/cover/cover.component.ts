import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  name="Cover";
  constructor() { }

  startApp() {
    window.location.href="./category";
  }

  ngOnInit(): void {
  }

}
