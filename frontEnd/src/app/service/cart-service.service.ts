import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { FoodItem } from '../common/FoodItem';
import { of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartFoodItemArray : FoodItem[] = [];

  constructor() { }

  addFoodItemToProductsArrayService(foodItemIntoArray: FoodItem){
    this.cartFoodItemArray.push(foodItemIntoArray);
  }

  getFoodItemFromCartService(): Observable<FoodItem[]>{
    return  of(this.cartFoodItemArray);
  }
}
