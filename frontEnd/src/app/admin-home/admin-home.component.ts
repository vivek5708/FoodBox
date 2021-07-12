import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../common/FoodItem';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  foodItemArray : FoodItem[] = [];
  
  constructor(private authenticationService : AuthenticationService) { }

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
}
