import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterBttsComponent } from './tools/buttons/footer-btts/footer-btts.component';

import { CommunicationComponent } from './communication/communication.component';
import { CommunicationService } from './communication.service';
import {HttpClientModule} from '@angular/common/http'
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
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ItemdescriptionComponent } from './itemdescription/itemdescription.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBttsComponent,
    CommunicationComponent,
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
    SubcategoryComponent,
    ItemdescriptionComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent, RoutingComponents]
})
export class AppModule { }
