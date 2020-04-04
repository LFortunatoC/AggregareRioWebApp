import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-start-btn',
  templateUrl: './start-btn.component.html',
  styleUrls: ['./start-btn.component.css']
})
export class StartBtnComponent implements OnInit {

  startApp() {
    this.router.navigateByUrl('/category');
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
