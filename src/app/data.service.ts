import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData } from './dataparameters'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialParameters: IData = {
    lang_id: 1,
    category_id: 2,
    subCategory_id: 1,
    menu_id : 3,
    client_id: 1,
    order_id:0,
    tableNumber: 0,
    OrderTotalValue: 0,
    OrderedItems: null
  }

  private parametersSource$ = new BehaviorSubject<IData>(this.initialParameters);
  currentParameters = this.parametersSource$.asObservable();

  constructor() { }

  changeParameters ( parameters: IData) {
    this.parametersSource$.next(parameters)
  }


}
