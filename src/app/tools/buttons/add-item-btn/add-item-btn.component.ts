import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-btn',
  templateUrl: './add-item-btn.component.html',
  styleUrls: ['./add-item-btn.component.css']
})
export class AddItemBtnComponent implements OnInit {

  bttAddItemText = " Add Item ";
  constructor() { }

  ngOnInit(): void {
  }

}
