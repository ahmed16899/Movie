import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { MoviesService } from '../Services/movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class GetTrendingResolver implements Resolve<boolean> {
  constructor(private _movieService:MoviesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let type = JSON.stringify(route.paramMap.get('type')) ;
    let type1 = 'movie';
   if(type.includes('movie'))
   {
      type1 = 'movie';
   } 
   else 
   {
      type1 = 'tv';
   }  
   //console.log(type)
   return type==null ? this._movieService.getTrending(type1,1):this._movieService.getTrending('movie',1);
 } 
}