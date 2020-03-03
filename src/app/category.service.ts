import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public menu: any;
  public categories: any;
  public menu_id = 4;


  constructor(private _menuService : MenuService) {

  }

    getCategories(lang_id) 
    {
      this._menuService.getCategories (lang_id)
      .subscribe(data => this.categories = data); 
      return this.categories;
    } 
}
