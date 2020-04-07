import { Component, OnInit } from '@angular/core';
import { ChargeService } from './charge.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.css']
})
export class ChargeComponent implements OnInit {
  balance : string;
  constructor(private CookieService:CookieService,private service: ChargeService,private router : Router) {
    let cook = this.CookieService.get('balance')
    this.balance=cook;
    console.log(cook+"cook")
   }
  userDisplayName = '';
  ngOnInit(): void {
  }
  Charge(){
    console.log('Charge method')
    this.userDisplayName = sessionStorage.getItem('userName');
    console.log(this.userDisplayName);

    let phoneNumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    let balance = (<HTMLInputElement>document.getElementById('chargeValue')).value;

    let y = +balance;

    this.service.charge(phoneNumber,y,this.userDisplayName).subscribe(user =>{
      console.log(user)
      if(user.success){
        document.cookie = "balance="+user.balance;
        this.balance = ""+user.balance;

        console.log("success "+user.success );
        console.log("success "+user.balance );
        alert("Success"+user.success)
      }
      else{
        console.log(false);

      }
    },
     error => {
      console.log(error)
      alert("Failed");

    });

  }
}
