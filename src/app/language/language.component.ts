import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import {Location} from '@angular/common';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  parameters : IData;
  languages: any;  
  // public name = 'Language';

  constructor(private service : CommunicationService, private data: DataService, private router: Router, private location: Location, public translate: TranslateService) {
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
    this.getLanguages(this.parameters)
    translate.addLangs(['English', 'Français', 'Portugues']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Français|Portugues/) ? browserLang : '');
   }

   

  getLanguages (parameters){
    this.service.getLanguages (parameters)
    .subscribe(data => {
       this.languages = data;
    }); 
   }

   selectLang(language_id: number) {
    console.dir(language_id);
    this.parameters.lang_id= language_id;
    this.data.changeParameters(this.parameters);  
    this.location.back();
     
    }
   
  ngOnInit(): void {

  }

}
