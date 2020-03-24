import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFull, IData, IItem, ItemList } from './dataparameters'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialParameters: IData = {
    lang_id: 1,
    category_id: 2,
    subCategory_id: 0,
    menu_id : 3,
    client_id: 1,
    order_id: 1,
    tableNumber: 0,
    OrderTotalValue: 0,
    OrderedItems: null,
    total: 0
  }


  initialItem: IItem = {
    id: 0,
    category_id: 0,
    subCategory_id: 0,
    menu_id: 0,
    picturePath : "",
    value: 0,
    active: false,
    title: "",
    description: "",
    qty: 0,
  }

  initialFull: IFull = {
    id: 6,
    picturePath:"",    
  }


  private fullPic$ = new BehaviorSubject<IFull>(this.initialFull);
  currentPic = this.fullPic$.asObservable();

  private parametersSource$ = new BehaviorSubject<IData>(this.initialParameters);
  currentParameters = this.parametersSource$.asObservable();

  private itemSource$ = new BehaviorSubject<IItem>(this.initialItem);
  currentItem = this.itemSource$.asObservable();

  constructor() { }

  changeParameters ( parameters: IData) {
    this.parametersSource$.next(parameters)
  }

  changeItem (item: IItem) {
    this.itemSource$.next(item)
  }

  

  // changeFull(full-picture: IFull){
  //   this.fullPic$.next
  // }

}
