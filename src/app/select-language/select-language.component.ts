import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Français', 'Portugues']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/English|Français|Portugues/) ? browserLang : 'English');
   }

  ngOnInit(): void {
  }

}
