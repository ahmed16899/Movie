import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';
import { MoviesService } from '../Services/movies/movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean=false;
  id2:string='';
  types:string[]=[];

  constructor(private _AuthService:AuthService
    ,private _ActivatedRoute:ActivatedRoute
    ,private _moviesService : MoviesService ) { }

  ngOnInit(): void {
    this._AuthService.userDataG.subscribe(()=>{
      //console.log(this._AuthService.userDataG.getValue())
      this._moviesService.homeData.next('done');
      if(this._AuthService.userDataG.getValue() != 'null' &&  this._moviesService.homeData.getValue()!='null')
      {
        this.isLogIn = true;
      }
      else
      {
        this.isLogIn = false;
      }
    });
   
  }
  logOut()
  {
    this._AuthService.logOut();
  }
  changeType (type:string)
  {
    //this.ngOnInit();
    this._moviesService.typeTop.next(type);
    this.types.push( this._moviesService.typeTop.getValue());
    console.log( this.types);
    //console.log(this._moviesService.typeTop.getValue())
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    if(this.types.length!=0)
    {
      this._moviesService.typeTop.next( this.types[this.types.length-1]);
      this.types.pop();
      console.log(this._moviesService.typeTop.getValue())
    }
  }
}
