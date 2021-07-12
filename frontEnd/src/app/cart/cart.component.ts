import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../common/FoodItem';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  foodItemArray : FoodItem[] = [];

  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    this.populateFoodArray();
  }

  populateFoodArray(){
    this.cartService.getFoodItemFromCartService().subscribe(
      data =>{
        this.foodItemArray = data;
      }
    )
  }

}
