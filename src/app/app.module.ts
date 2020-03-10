import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterBttsComponent } from './footer-btts/footer-btts.component';

import { CommunicationComponent } from './communication/communication.component';
import { CommunicationService } from './communication.service';
import {HttpClientModule} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { InfobartitleComponent } from './infobartitle/infobartitle.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBttsComponent,
    CommunicationComponent,
    NavbarComponent,
    InfobartitleComponent,
    CategoryComponent,
    ItemComponent,
    OrderComponent
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
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
