import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-btn',
  templateUrl: './bill-btn.component.html',
  styleUrls: ['./bill-btn.component.css']
})

export class BillBtnComponent implements OnInit {

  // bttBillText = " Bill ";

  billModal() {
    this.router.navigateByUrl('bill');
    
  }
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

}
