import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { CategoryService } from './category.service';
import { LangDropListComponent } from './tools/lang-drop-list/lang-drop-list.component';
import { BillComponent } from './bill/bill.component';
import { CoverComponent } from './cover/cover.component';
import { FullPictureComponent } from './full-picture/full-picture.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { ToolsComponent } from './tools/tools.component';
import { ButtonsComponent } from './tools/buttons/buttons.component';

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
    ButtonsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [CommunicationService, CategoryService],
  bootstrap: [AppComponent, CategoryComponent]
})
export class AppModule { }
