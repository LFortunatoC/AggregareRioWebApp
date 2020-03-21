import { IPreOrder } from './pre-order/pre-order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { IMenu } from './menu';
import { ICategory} from './category/categorySubCategory';
import { ISubCategory} from './subcategory/subcategory';
import {IItem} from './item/item';
import {IOrder} from './order/order';
import {ICover} from './cover/cover';
import {IFull} from './full-picture/full-picture'
import { Observable } from 'rxjs';
import { IHistory } from './history/history';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private MenuUrl: string = 'http://127.0.0.1:8000/api/menu/';
  private CategoryUrl: string = 'http://127.0.0.1:8000/api/category/searchcategory/';
  private SubCategoryUrl: string = 'http://127.0.0.1:8000/api/subcategory/searchsubcategory/';
  private ItemsUrl: string  = 'http://127.0.0.1:8000/api/item/search/';
  private OrderUrl: string =  'http://127.0.0.1:8000/api/order/';
  private HistoryUrl: string= 'http://127.0.0.1:8000/api/history/';  
  private PreOrdersUrl: string= 'http://127.0.0.1:8000/api/pre-order/';
  private CoverUrl: string = 'http://127.0.0.1:8000/api/public/storage/app/public/restaurants'
  private FullUrl: string = 'http://127.0.0.1:8000/api/public/storage/app/public/items/pics'

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

  //Communications for cover
  getCovers (menu_id) :Observable <ICover[]> {
    return this.http.get<ICover[]>(this.CoverUrl + menu_id);
  }

  getFullPictures(item_id):Observable <IFull[]>{
    return this.http.get<IFull[]>(this.FullUrl + item_id);
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

  
    

  // getPreOrders (parameter:any):  Observable <IPreOrder[]> {
  //   return this.http.get<IPreOrder[]>(this.PreOrdersUrl + parameter.order_id, {
  //     params: new HttpParams()          
  //         .set('language_id', parameter.lang_id)
  //   });
  // }

  // getHistorys (parameter:any):  Observable <IHistory[]> {
  //   return this.http.get<IHistory[]>(this.HistoryUrl + parameter.order_id, {
  //     params: new HttpParams()   
  //         .set('subcategory_id', parameter.subCategory_id)       
  //         .set('language_id', parameter.lang_id)
  //         .set('order_id', parameter.order_id)
  //   });
  // }

  // getItemsofAnOrder(Order_id): Observable <IItem[]> {
  //   return this.http.get<IItem[]>(this.OrderUrl + item_id,{
  //     params: new HttpParams().set('Order_id', Order_id)}
  //     );
  // }

}
