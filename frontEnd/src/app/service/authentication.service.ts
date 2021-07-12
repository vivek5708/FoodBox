import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FootWear } from '../common/footwear';
import { FoodItem } from '../common/FoodItem';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = 'http://localhost:8090/mainapp/login';
  private foodItemUrl = 'http://localhost:8090/mainapp/fooditem';

  constructor(private httpClient: HttpClient) { }

  getFootWear():Observable<FootWear>{
    const footUrl = `${this.loginUrl}`;
    return this.httpClient.get<FootWear>(footUrl);
    console.log('inside Auth service');
  }

  getFoodItem():Observable<FoodItem[]>{
    const foodItemFetch = `${this.foodItemUrl}`;
    return this.httpClient.get<FoodItem[]>(foodItemFetch);
    console.log('inside Auth service');
  }

  // authenticate(username, password) {
  //   if (username === "javainuse" && password === "password") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('username')
  //   console.log(!(user === null))
  //   return !(user === null)
  // }

  // logOut() {
  //   sessionStorage.removeItem('username')
  // }
}
