import { User } from './../_models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{TransferMoneyService} from './transfer-money.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})


export class TransferMoneyComponent implements OnInit {
  typeList:any;
  selected = 'option2';
  balance : string;
  constructor(private CookieService:CookieService,private service: TransferMoneyService,private router : Router) {
    let cook = this.CookieService.get('balance')
    this.balance=cook;
   }
  userDisplayName = '';
  ngOnInit(): void {
    //  this.balance1 = this.user.balance;
  }



  transfer(){
    console.log('transfer method');
    this.userDisplayName = sessionStorage.getItem('userName');
    console.log(this.userDisplayName);

    let phoneNumber = (<HTMLInputElement>document.getElementById('ID')).value;
    let balance = (<HTMLInputElement>document.getElementById('Amount')).value;
    let y = +balance;
    console.log(y+"yyyyyyy")
    this.service.tranfer(phoneNumber,y,this.userDisplayName).subscribe(user =>{
      console.log(user)
      if(user.success){
        console.log("success "+user.success );
        alert("Success Transfer")
      }
      else{
        console.log(false);
        alert("Failed Transfer")
      }
    },
     error => {
      alert("Failed Transfer")
      console.log(error)
    });

  }
}

