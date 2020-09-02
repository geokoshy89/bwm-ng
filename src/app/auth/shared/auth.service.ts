import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import * as moment from 'moment';

class DecodedToken{
  exp:number=0;
  username:string='';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;

  constructor(private httpClient:HttpClient) {
    this.decodedToken=JSON.parse(localStorage.getItem('bwm_meta'))||new DecodedToken();
  }
  private saveToken(authToken:any){
    const jwt=new JwtHelperService();
    this.decodedToken=jwt.decodeToken(authToken);
    localStorage.setItem('bwm_auth',authToken)
    localStorage.setItem('bwm_meta',JSON.stringify(this.decodedToken));
    return  authToken;
  }
  private getExpiration(){
    return moment.unix(this.decodedToken.exp);
  }
  public register(userData):Observable<any>{
    return this.httpClient.post('/api/v1/users/register',userData);
  }

  public login(loginCredentials):Observable<any>{
    return this.httpClient.post('/api/v1/users/auth',loginCredentials).pipe(
      map((token)=>this.saveToken(token)));
  }
  public logout(){
    localStorage.removeItem('bwm_auth');
    localStorage.removeItem('bwm_meta');
    this.decodedToken=new DecodedToken();
  }
  public isAuthencticated():boolean{
    return moment().isBefore(this.getExpiration());
  }
  public getAuthToken():string{
    return localStorage.getItem('bwm_auth');
  }
  public getUserName():string{
    return this.decodedToken.userName;
  }

}
