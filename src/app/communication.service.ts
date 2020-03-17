import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { IMenu } from './menu';
import { ICategory} from './category/categorySubCategory';
import { ISubCategory} from './subcategory/subcategory';
import {IItem} from './item/item';
import {IOrder} from './order/order'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private MenuUrl: string = 'http://127.0.0.1:8000/api/menu/';
  private CategoryUrl: string = 'http://127.0.0.1:8000/api/category/searchcategory/';
  private SubCategoryUrl: string = 'http://127.0.0.1:8000/api/subcategory/searchsubcategory/';
  private ItemsUrl: string  = 'http://127.0.0.1:8000/api/item/search/';
  private OrderUrl: string =  'http://127.0.0.1:8000/api/order/';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   
  getMenu(): Observable <IMenu[]> {
    return this.http.get<IMenu[]>(this.MenuUrl);
  }


  getMenubyId(id, language_id): Observable <IMenu[]> {
    return this.http.get<IMenu[]>(this.MenuUrl + id,{
      params: new HttpParams().set('language_id', language_id)}
      );
  }

  getCategories (language_id): Observable <ICategory[]> {
    return this.http.get<ICategory[]>(this.CategoryUrl + language_id);
  }

  getSubCategories (language_id): Observable <ISubCategory[]> {
    return this.http.get<ISubCategory[]>(this.SubCategoryUrl + language_id);
  }

  getItems (parameter:any):  Observable <IItem[]> {
    return this.http.get<IItem[]>(this.ItemsUrl + parameter.menu_id, {
      params: new HttpParams()
          .set('subcategory_id', parameter.subCategory_id)
          .set('language_id', parameter.lang_id)
    });
  }

  getOrder (order_id) :Observable <IOrder[]> {
    return this.http.get<IOrder[]>(this.OrderUrl + order_id);
  }
}
