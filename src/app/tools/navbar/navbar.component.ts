import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router, RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }
  
  ngOnInit(): void {
  }

  btBack() {
    if (!this.location.isCurrentPathEqualTo(window.location.href="/cover")) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/cover');
    }
      }

  btMenu() {
    // window.location.href="./category";
    this.router.navigateByUrl('/category');
  }

  btLang() {
    this.router.navigateByUrl('/language');
  }

  
}
