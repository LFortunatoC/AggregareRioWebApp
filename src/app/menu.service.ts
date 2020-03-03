import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { IMenu } from './menu';
import { ICategory, ISubCategory } from './categorySubCategory';
import {IItem} from './item';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private MenuUrl: string = 'http://127.0.0.1:8000/api/menu/';
  private CategoryUrl: string = 'http://127.0.0.1:8000/api/category/searchcategory/';
  private SubCategoryUrl: string = 'http://127.0.0.1:8000/api/subcategory/searchsubcategory/';
  private ItemsUrl: string  = 'http://127.0.0.1:8000/api/item/searchitems/';

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

  getItems (menu_id, category_id, subCategory_id, language_id):  Observable <IItem[]> {
    return this.http.get<IItem[]>(this.ItemsUrl + language_id);
  }
  

 
}
