import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FooterBttsComponent } from './tools/buttons/footer-btts/footer-btts.component';

import { CommunicationService } from './communication/communication.service';
import { RequestCacheService } from './communication/request-cache.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CominterceptorInterceptor} from './communication/cominterceptor.interceptor';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { InfobartitleComponent } from './tools/infobartitle/infobartitle.component';
import { CategoryComponent } from './category/category.component';
import { LangDropListComponent } from './tools/lang-drop-list/lang-drop-list.component';
import { BillComponent } from './bill/bill.component';
import { CoverComponent } from './cover/cover.component';
import { FullPictureComponent } from './full-picture/full-picture.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { ToolsComponent } from './tools/tools.component';
import { ButtonsComponent } from './tools/buttons/buttons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ButtonQtComponent } from './button-qt/button-qt.component';
import { ItemOrdersComponent } from './item-orders/item-orders.component';
import { ChecklistComponent } from './tools/checklist/checklist.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ItemDescriptionComponent } from './item-description/item-description.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBttsComponent,
    NavbarComponent,
    InfobartitleComponent,
    CategoryComponent,
    LangDropListComponent,
    BillComponent,
    CoverComponent,
    FullPictureComponent,
    HistoryComponent,
    OrderComponent,
    PreOrderComponent,
    ToolsComponent,
    ButtonsComponent,
    RoutingComponents,
    PageNotFoundComponent,
    //PreOrder_History_Pages,
    ButtonQtComponent,
    ItemOrdersComponent,
    ChecklistComponent,
    SubcategoryComponent,
    ItemDescriptionComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [CommunicationService,
              RequestCacheService,
            { provide: HTTP_INTERCEPTORS, useClass: CominterceptorInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent, RoutingComponents]
})
export class AppModule { }
