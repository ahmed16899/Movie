import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesService } from '../movies/movies.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDataG = new BehaviorSubject("null");
  constructor(private _HttpClient:HttpClient 
    , private _Router:Router
    ,private _moviesService : MoviesService
    ) 
  {
      if(localStorage.getItem('token'))
      {
        this.setUserData();
      }
  }
  register(registerData:any):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,registerData);
  }
  login(loginData:any):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,loginData);
  }
  setUserData()
  {
    //const token = ;
    const userData:any = jwtDecode(JSON.stringify(localStorage.getItem('token')));
    this.userDataG.next(userData);
    return userData ;
  }
  logOut()
  {
    localStorage.removeItem('token')
    this.userDataG.next("null");
    this._Router.navigate(['login']);
  }
}
