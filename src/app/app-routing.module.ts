import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BillComponent} from './bill/bill.component';
import {CategoryComponent} from './category/category.component';
import {CoverComponent} from './cover/cover.component';
import {FullPictureComponent} from './full-picture/full-picture.component';
import {HistoryComponent} from './history/history.component';
import {ItemComponent} from './item/item.component';
import {OrderComponent} from './order/order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PreOrderComponent} from './pre-order/pre-order.component';
//import {SubCategoryComponent} from './subcategory/subcategory.component';

const routes: Routes = [
    {path:"", redirectTo: '/category', pathMatch: 'full' },
    { path: 'bill', component: BillComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'cover', component: CoverComponent},
    { path: 'full-picture', component: FullPictureComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'item', component: ItemComponent},  
    { path: 'order', component: OrderComponent},
  //{ path: 'subcategory' component: SubCategoryCompoment} ,    
    { path: 'pre-order', component: PreOrderComponent} ,
    { path: "**", component: PageNotFoundComponent}


];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const RoutingComponents = [
                                    BillComponent,
                                    CategoryComponent, 
                                    CoverComponent, 
                                    FullPictureComponent, 
                                    HistoryComponent,
                                    ItemComponent,
                                    OrderComponent, 
                                    PageNotFoundComponent,
                                    PreOrderComponent
                                    //SubCategoryCompoment
                                ]