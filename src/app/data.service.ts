import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData, IItem, ItemList, IPreOrder } from './dataparameters'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialParameters: IData = {
    lang_id: 3,
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

  initialPreOrder: IPreOrder = {
    tableNumber: 0,
    deliveredAt: new Date(),
    itemList: new Array()
  }

  private parametersSource$ = new BehaviorSubject<IData>(this.initialParameters);
  currentParameters = this.parametersSource$.asObservable();

  private itemSource$ = new BehaviorSubject<IItem>(this.initialItem);
  currentItem = this.itemSource$.asObservable();

  private preOrderSource$ = new BehaviorSubject<IPreOrder>(this.initialPreOrder);
  currentPreOrder = this.preOrderSource$.asObservable();

  constructor() { }

  changeParameters ( parameters: IData) {
    this.parametersSource$.next(parameters)
  }

  changeItem (item: IItem) {
    this.itemSource$.next(item)
  }

  changePreOrder (preorder: IPreOrder) {
    this.preOrderSource$.next(preorder)
  }

}
