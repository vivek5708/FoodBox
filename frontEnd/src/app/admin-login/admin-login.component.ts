import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FootWear } from 'src/app/common/footwear';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

   footwear1: FootWear = new FootWear();

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.getFootWearInComponenet();
  }

  getFootWearInComponenet(){
    this.authenticationService.getFootWear().subscribe(
      data =>{
        this.footwear1 = data;
        console.log(data);
        console.log(this.footwear1.brand);
        console.log('Vivek');
      }
      
    )
  }

}
