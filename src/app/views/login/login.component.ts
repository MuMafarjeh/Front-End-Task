import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  constructor(private service: LoginService,private router : Router) {}

  submit(){
    console.log('login method')
    let name = (<HTMLInputElement>document.getElementById('Username')).value;
    let password = (<HTMLInputElement>document.getElementById('Password')).value;
    sessionStorage.setItem('userName', name);
    console.log("userName-----"+sessionStorage.getItem('userName'));
    this.service.login(name,password)
			.subscribe(user => {
        console.log(user)
        if (user.success) {

          document.cookie = "balance="+user.balance;
          // document.cookie = "login="+user.login;
          // console.log( user.userName+"MuaydMuayedMuayed")
          this.router.navigateByUrl('dashboard')
        } else {

          // document.cookie = "token="+null;
          // document.cookie = "login="+user.login;
        }
      },
      error => {
        console.log(error)
      });
  }
}
