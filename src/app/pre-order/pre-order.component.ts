import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit {

//Do 1 -Done?
//Return title of each item (language, category, SubCatergoria,Menu) to provide from user
//Return value"unit price" of each item
// ******Eu usei o getItems(), mas nao sei se eh a forma correta, usei porque ele retorna as informacoes que preciso.

//Do 2  Components Increment/Decrement quantity -Done


//Do 3 Return Number Table - Done
//*** Eu deixei pronto para que a table receba o numero da mesa enviada pelo QRcode

// Do 4 List-Header - Done
//*** Coloquei o cabecalho da lista  */

//Do 5 Quantity count - To do
//** contar a quantidade de itens add no log  ex:{{log}}*/

//Do 6  Buttons Order and Bill - To do
//**Enviar os dados para as Tabelas Order e ItemOrder */

  name = "Pre-Order";

  preOrders: any;

  //Parametros vindos do User
  parameters = {
      lang_id: 1,
      subCategory_id : 3,
      menu_id: 3
    };

  constructor(private service : CommunicationService) { 
    this.getItems(this.parameters)
  }

  getItems (parameters){
    this.service.getItems (parameters)
    .subscribe(data => {
       this.preOrders = data;
    }); 
   }

  ngOnInit(): void {
  }
  
//table="mesa retornada pelo QRcode"
 table = 15;
 showtable = false;

 onShowTable(){
      this.showtable = true;
      return this.table;
 }
 
}
