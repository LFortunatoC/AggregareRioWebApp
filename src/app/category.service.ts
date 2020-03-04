import { Injectable, ɵConsole } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Subject } from 'rxjs';
import {ICategory} from './categorySubCategory'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public menu: any;
  public categories;
  private messageSource = new Subject<ICategory>();
  messageSource$ = this.messageSource.asObservable();

  constructor(private CommService : CommunicationService ) {

  }

  changeMessage(category: any) {
    this.messageSource.next(category)
  }

    getCategories(lang_id) 
    {
      this.CommService.getCategories (lang_id)
      .subscribe(data => {
         this.categories = data;
      }); 
      return this.categories;
    } 
}
