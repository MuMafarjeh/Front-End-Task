import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { message } from '../_models/Message';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  greeter = new message();
  baseUrl = this.greeter.baseUrl
  constructor(private http: HttpClient) { }

  login(UserName: string, password: string): Observable<User> {
        console.log(UserName,password)
        return this.http.post<User>(`${this.baseUrl}/api/Identity/Login`, { UserName, password});
    }
}
