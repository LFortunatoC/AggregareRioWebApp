import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: '.app-menu',
  //templateUrl: './menu.component.html',
  template: ` <h2> {{name.toUpperCase()}}</h2>
              <h2 class="text-success">{{greetUser()}}</h2>
              <h3> Menus from Server</h3>
              <div style = "text-align:left">
              <table border = 1>
              <tr><th>Id</th><th>Client_id</th><th>picturePath</th><th>logoPath</th><th>defaultLang</th></tr>
              <tr *ngFor = "let item of answer; index as i">
                 <td> {{item.id}} </td> <td> {{item.client_id}} </td> <td>  {{item.picturePath}} </td> <td>  {{item.logoPath}} </td> <td>   {{item.defaultLang}} </td>
              </tr>
                 </table>
              <h3> Menu {{menu.id}} </h3>
              <p> Client Id: {{menu.client_id}}</p>
              <p> Picture Path: {{menu.picture_path}}</p>
              <p> Logo Path: {{menu.logoPath}}</p>
              <p> Default Language: {{menu.defaultLang}}</p>
              <p> Title: {{menu.title}}</p>
              <p> Description: {{menu.description}}</p>
              <p> AltText1: {{menu.altText1}}</p>
              <p> AltText2: {{menu.altText2}}</p>
              <p> Created At: {{menu.created_at}}</p>
              <p> Updated At: {{menu.updated_at}}</p>
              <p> Active: {{menu.active}}</p>

              <h3>Categories</h3>
              <ul *ngFor = "let category of categories; index as i">
                  <li> {{category.description}}</li>
              </ul>

              <h3>SubCategories</h3>
              <ul *ngFor = "let subcategory of subcategories; index as i">
                  <li> {{subcategory.description}}</li>
              </ul>
              </div>

              `,
  //styleUrls: ['./menu.component.css']
  styles:[` 
              div {color:fucsia;}

              .text-success {color:green;}
              .text-danger {color:red;}
              .text-special{font-style:italic;}
          `]
})
export class MenuComponent implements OnInit {

  public name = "Menu";
  public successClass  = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  };

  public answer = [];
  public menu: any;
  public categories: any;
  public subcategories: any;
  public items: any;

  public menu_id = 4;
  public lang_id = 1;
  public category_id = 1;
  public subCategory_id=1;
  constructor(private _menuService : MenuService) { }

  ngOnInit(): void {
    this._menuService.getMenu()
      .subscribe(data=> {
        
        if(data) {
          this.answer = data['data'];
        }
      });

    this._menuService.getMenubyId(this.menu_id, this.lang_id)
        .subscribe(data => this.menu = data); 

    this._menuService.getCategories (this.lang_id)
        .subscribe(data => this.categories = data);  

        
    this._menuService.getSubCategories (this.lang_id) 
        .subscribe(data => this.subcategories = data);  

    this._menuService.getItems (this.menu_id, this.category_id, this.subCategory_id, this.lang_id)
    .subscribe(data => this.items = data);         
  }

  greetUser() {
    return "Hello you are in our " + this.name + " page!"
  }

}
