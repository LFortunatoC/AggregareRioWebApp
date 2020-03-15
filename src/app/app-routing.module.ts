import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';
//import {SubCategoryComponent} from './subcategory/subcategory.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path:"", redirectTo: '/category', pathMatch: 'full' },
    { path: 'category', component: CategoryComponent},
    //{ path: 'subcategory' component: SubCategoyCompoment} , 
    { path: 'item', component: ItemComponent},  
    { path: 'order', component: OrderComponent} ,
    { path: "**", component: PageNotFoundComponent}


];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [CategoryComponent, ItemComponent, OrderComponent, PageNotFoundComponent]