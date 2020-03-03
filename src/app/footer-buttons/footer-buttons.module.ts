import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialComponents = [MatButtonToggleModule];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class FooterButtonsModule { }
