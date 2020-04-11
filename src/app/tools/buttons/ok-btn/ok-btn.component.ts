import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ok-btn',
  templateUrl: './ok-btn.component.html',
  styleUrls: ['./ok-btn.component.css']
})
export class OkBtnComponent implements OnInit {

  ngOnInit(): void {
  }
  
  okModal() {
    this.router.navigateByUrl('category');
  }


  constructor(private router: Router, private route: ActivatedRoute) { }
}
