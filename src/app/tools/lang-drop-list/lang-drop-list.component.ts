import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IData } from 'src/app/dataparameters';
import { CommunicationService } from 'src/app/communication/communication.service';

@Component({
  selector: 'app-lang-drop-list',
  templateUrl: './lang-drop-list.component.html',
  styleUrls: ['./lang-drop-list.component.css']
})
export class LangDropListComponent implements OnInit {

  parameters : IData;
  languages: any;
  
  constructor(private service : CommunicationService, private data: DataService, private router: Router) {
    this.getLanguages(this.parameters)
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
     
    }
   
  ngOnInit(): void {

   // this.getLanguages(this.parameters)
  }

  



}
