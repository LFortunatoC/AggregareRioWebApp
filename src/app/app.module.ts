import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterBttsComponent } from './tools/buttons/footer-btts/footer-btts.component';

import { CommunicationComponent } from './communication/communication.component';
import { CommunicationService } from './communication.service';
import {HttpClientModule} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
<<<<<<< HEAD
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
=======
import { NavbarComponent } from './navbar/navbar.component';
import { InfobartitleComponent } from './infobartitle/infobartitle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

>>>>>>> issue-add-routing

@NgModule({
  declarations: [
    AppComponent,
    FooterBttsComponent,
    CommunicationComponent,
    NavbarComponent,
    InfobartitleComponent,
<<<<<<< HEAD
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
=======
    routingComponents,
    PageNotFoundComponent
>>>>>>> issue-add-routing
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
<<<<<<< HEAD
  providers: [CommunicationService, CategoryService],
  bootstrap: [AppComponent, CategoryComponent]
=======
  providers: [CommunicationService],
  bootstrap: [AppComponent]
>>>>>>> issue-add-routing
})
export class AppModule { }
