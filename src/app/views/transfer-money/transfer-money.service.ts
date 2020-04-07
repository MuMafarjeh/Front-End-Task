import { Injectable } from '@angular/core';
import { message } from '../_models/Message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TransferMoneyService {
  greeter = new message();
  baseUrl = this.greeter.baseUrl
  constructor(private http: HttpClient) { }

  tranfer(phoneNumber: string, balance: number,UserName:string): Observable<User> {
    console.log(phoneNumber,balance)
    return this.http.put<User>(`${this.baseUrl}/api/Identity/Transfer`, { phoneNumber, balance,UserName});
}
}
