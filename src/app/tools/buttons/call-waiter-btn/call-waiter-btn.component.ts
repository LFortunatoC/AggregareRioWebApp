import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call-waiter-btn',
  templateUrl: './call-waiter-btn.component.html',
  styleUrls: ['./call-waiter-btn.component.css']
})
export class CallWaiterBtnComponent implements OnInit {

  bttCallWaiterText = " Call Waiter ";
  constructor(private router: Router, private route: ActivatedRoute) { }

  public popWaiter() {
      this.router.navigateByUrl('/restaurant/3/10');
    }


  ngOnInit(): void {
  }

}
