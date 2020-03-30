import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData } from '../dataparameters';
import { Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //Do 1 -Incomplete
//Return title of each item (language, category, SubCatergoria,Menu) to provide from User and (Order_id) generated -----
// when User confirm/send Order.
//Return value"unit price" of each item
// ******Eu usei o getItems(), nao eh a forma correta porque eh necessario filtrar por Order os itens add pelo User, porem 
//nao consegui fazer esse filtro com os metodos disponiveis na API.

//Do 2  Components checked -Incomplete (vide tools/checklist.component)
// precisa criar um metodo para receber uma resposta se a order foi entregue
//Icon checklist funciona com True/False. 


//Do 3 Return Number Table - Done
//*** Eu deixei pronto para que a table receba o numero da mesa enviada pelo QRcode

// Do 4 List-Header - Done
//*** Coloquei o cabecalho da lista  */

//Do 5 Quantity count - To do
//** contar a quantidade de itens add no log  ex:{{log}}*/

//Do 6  Buttons  Bill - To do
//**Enviar os dados para as Tabelas Order e ItemOrder */

  // name="History";
  history: any;
  parameters : IData;
  table: number;


  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentParameters.subscribe(parameters => this.parameters = parameters);
  }
 
  getOrder (parameters){
    this.service.getOrder (parameters)
    .subscribe(data => {
       this.history = data;
    }); 
   }

  ngOnInit(): void {
    this.table = this.parameters.tableNumber;
    this.getOrder(this.parameters)
  }
  
}
