import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterButtonsModule} from './footer-buttons/footer-buttons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FooterButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
