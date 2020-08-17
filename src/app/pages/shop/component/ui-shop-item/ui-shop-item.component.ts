import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-ui-shop-item',
  templateUrl: './ui-shop-item.component.html',
  styleUrls: ['./ui-shop-item.component.scss']
})
export class UiShopItemComponent implements OnInit {

  @Input() ingredients: Ingredient[];
  @Output() onremove = new EventEmitter<{index: number}>();
  @Output() onedit = new EventEmitter<{index: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(i: number){
    this.onremove.emit({index: i});
  }

  edit(id: number){
    this.onedit.emit({index: id});
  }

}
