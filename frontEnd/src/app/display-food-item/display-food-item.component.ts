import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { FoodItem } from '../common/FoodItem';
import { AuthenticationService } from '../service/authentication.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-display-food-item',
  templateUrl: './display-food-item.component.html',
  styleUrls: ['./display-food-item.component.css']
})
export class DisplayFoodItemComponent implements OnInit {

  foodItem1 : FoodItem = new FoodItem();
  foodItemArray : FoodItem[] = [];

  constructor(private authenticationService : AuthenticationService,
              private cartService : CartServiceService) { }

  ngOnInit() {
    this.getFoodItemForDisplay();
  }

  getFoodItemForDisplay(){
    this.authenticationService.getFoodItem().subscribe(
      data =>{
        this.foodItemArray = data;
      }
    )
  }

  addToCart(foodItemToCart : FoodItem){
    this.cartService.addFoodItemToProductsArrayService(foodItemToCart);
  }
}
