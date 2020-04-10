import { ModalComponent } from './modal/modal.component';
import {ToolsComponent} from './tools/tools.component';
import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BillComponent} from './bill/bill.component';
import {CategoryComponent} from './category/category.component';
import{SubcategoryComponent} from './subcategory/subcategory.component';
import {CoverComponent} from './cover/cover.component';
import {FullPictureComponent} from './full-picture/full-picture.component';
import {HistoryComponent} from './history/history.component';
import {ItemComponent} from './item/item.component';
import {OrderComponent} from './order/order.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PreOrderComponent} from './pre-order/pre-order.component';
import {ItemDescriptionComponent} from './item-description/item-description.component';
import {LanguageComponent} from './language/language.component';

// This Routes compose the specific location of each component, helping the app request particular pages or components.
const routes: Routes = [
    { path:"", redirectTo: '/restaurant', pathMatch: 'full' },
    { path: 'restaurant/:menu_id/:table_num', component: CoverComponent},
    { path: 'cover', component: CoverComponent},
    { path: 'bill', component: BillComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'subcategory', component: SubcategoryComponent},
    { path: 'full-picture', component: FullPictureComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'item', component: ItemComponent},  
    { path: 'order', component: OrderComponent},
    { path: 'pre-order', component: PreOrderComponent},
    { path: 'item-description', component: ItemDescriptionComponent},
    { path: 'language', component: LanguageComponent},
    { path: "**", component: PageNotFoundComponent},
    { path: 'tools', component: ToolsComponent},
    { path: 'modal', component: ModalComponent}


];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const RoutingComponents = [
                                    BillComponent,
                                    CategoryComponent, 
                                    SubcategoryComponent,
                                    CoverComponent, 
                                    FullPictureComponent, 
                                    HistoryComponent,
                                    ItemComponent,
                                    OrderComponent, 
                                    PageNotFoundComponent,
                                    PreOrderComponent,
                                    ItemDescriptionComponent, 
                                    ToolsComponent
                                    //SubCategoryCompoment
                                ]