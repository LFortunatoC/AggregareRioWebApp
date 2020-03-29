import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication/communication.service';
import {DataService} from '../data.service';
import { IData, IPreOrder,IPreOrderItem } from '../dataparameters';
import { Router} from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  public name = 'Item Description';
 
  parameters : IData;
  selectedItem: any;
  preOrder: IPreOrder;
  itemsDesc: any;
  selectLang = 0;
  

  constructor(private service : CommunicationService, private data: DataService, private router: Router) { 
    this.data.currentItem.subscribe(parameters => this.selectedItem = parameters);
    this.data.currentPreOrder.subscribe(parameters => this.preOrder = parameters);
    this.data.currentParameters.subscribe(parameters => 
      {
        this.parameters = parameters;
        this.updateDescription();
      } 
    );
  }

   selectItem(itemsDesc: any) {
      this.router.navigateByUrl('/full-picture'); 
   }

  // Joao... eh aqui que a magica deve acontecer descomente e codifique!!!! 
  // toda vez que o botao add to order ou o submit for clicado esta funcao deve ser chamada. 
  // Ela deve verificar se qty > 0 adiciona
  // Se qty == 0 nao faz nada.

  //  addToOrder() {
  //   let item : IPreOrderItem;
  //   item.item_id = 
  //   item.qty = 
  //   item.currPrice = 
  //   this.preOrder.itemList.push(item);
  //   this.data.changePreOrder(this.preOrder);
  //  }
  
   ngOnInit(): void {

  }

  getItemById (parameters){
    this.service.getItembyId (parameters)
    .subscribe(data => {
       this.selectedItem = data;
    }); 
   }

  updateDescription() {
     if(this.selectLang==0) {
      this.selectLang = this.parameters.lang_id;

     } else if (this.selectLang != this.parameters.lang_id) {
      
      let itemParameters = {
        lang_id: this.parameters.lang_id,
        id: this.selectedItem.id
      };
      this.getItemById(itemParameters);
      console.dir( this.selectedItem);
      this.selectLang = this.parameters.lang_id;
    }
  }

}
