import { IData } from './../dataparameters';
import { IPreOrder } from '../pre-order/pre-order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { ICategory} from '../category/categorySubCategory';
import { ISubCategory} from '../subcategory/subcategory';
import { ICover } from '../cover/cover';
import {IItem} from '../item/item';
import {IOrder} from '../order/order';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';
import {ILanguage}from '../language/language'


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private MenuUrl: string = 'http://127.0.0.1:8000/api/menu/';
  private CategoryUrl: string = 'http://127.0.0.1:8000/api/category/searchcategory/';
  private SubCategoryUrl: string = 'http://127.0.0.1:8000/api/subcategory/searchsubcategory/';
  private ItemsUrl: string  = 'http://127.0.0.1:8000/api/item/search/';
  private ItemByIdUrl: string  = 'http://127.0.0.1:8000/api/item/';
  private OrderUrl: string =  'http://127.0.0.1:8000/api/order/';
  private LanguageUrl: string = 'http://127.0.0.1:8000/api/language/';


  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   
  getMenu(): Observable <ICover[]> {
    return this.http.get<ICover[]>(this.MenuUrl);
  }


  getMenubyId(parameters: any): Observable <ICover[]> {
    return this.http.get<ICover[]>(this.MenuUrl + parameters.menu_id,{
      params: new HttpParams().set('language_id', parameters.lang_id)}
      );
  }

  getCategories (parameters:any): Observable <ICategory[]> {
    return this.http.get<ICategory[]>(this.CategoryUrl + parameters.lang_id);
  }

  getSubCategories (parameters:any): Observable <ISubCategory[]> {
    return this.http.get<ISubCategory[]>(this.SubCategoryUrl + parameters.category_id +'/'+ parameters.lang_id);
  }

  getItems (parameters:any):  Observable <IItem[]> {
    return this.http.get<IItem[]>(this.ItemsUrl + parameters.menu_id, {
      params: new HttpParams()
          .set('subcategory_id', parameters.subCategory_id)
          .set('language_id', parameters.lang_id)
    });
  }

  getItembyId (parameters:any):  Observable <IItem[]> {
    return this.http.get<IItem[]>(this.ItemByIdUrl + parameters.id, {
      params: new HttpParams()
          .set('language_id', parameters.lang_id)
    });
  }


  getOrder (parameters:any) :Observable <IPreOrder[]> {
    return this.http.get<IPreOrder[]>(this.OrderUrl + parameters.order_id,{
      params: new HttpParams()
      .set('language_id', parameters.lang_id)
    } );
  }

  getLanguages(parameters: any) :Observable <ILanguage[]> {
    return this.http.get<ILanguage[]>(this.LanguageUrl);
  }

  postPreOrder  (parameters:any) :Observable <IOrder[]>{
    return this.http.post<IOrder[]>(this.OrderUrl,{
      
      tableNumber: parameters.tableNumber,
      deliveredAt: parameters.deliveredAt.toISOString().slice(0, 19).replace('T', ' '),
      itemList:  parameters.itemList,
      observe: "res"}).pipe(retry(3),
      );
  }
}
