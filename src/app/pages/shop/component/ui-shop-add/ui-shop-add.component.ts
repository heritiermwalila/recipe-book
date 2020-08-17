import { Component, OnInit, Output, EventEmitter, ViewChild, Input, OnChanges, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { NgForm } from '@angular/forms';
import { ShopService } from 'src/app/services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ui-shop-add',
  templateUrl: './ui-shop-add.component.html',
  styleUrls: ['./ui-shop-add.component.scss']
})
export class UiShopAddComponent implements OnInit, OnChanges, OnDestroy {

  subscription: Subscription;

  constructor(private shopServ: ShopService) { }

  @Output() onaddingredient = new EventEmitter<Ingredient>();
  @ViewChild('addForm') addForm: NgForm;


  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  ngOnInit(): void {
    this.subscription = this.shopServ.editingStart
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shopServ.getIngredient(index);
          this.addForm.setValue(
            {
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          )
        }
      );
  }

  submit(form: NgForm){
    if (this.editMode){
      this.shopServ.edit(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount));
      this.editMode = false;
      this.addForm.reset();
    }else{
      const ing = new Ingredient(form.value.name, form.value.amount);
      this.onaddingredient.emit(ing);
      this.addForm.reset();
    }
  }

  ngOnChanges(changes){
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  clear(){
    this.addForm.reset();
    this.editMode = false;
  }

  delete(){
    this.shopServ.remove(this.editedItemIndex);
    this.addForm.reset();
    this.editMode = false;
  }

}
