import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable} from 'rxjs';
import { MoviesService } from '../Services/movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class GetresolverResolver implements Resolve<any> {
  constructor(private _movieService:MoviesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const movieID = route.paramMap.get('id');
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

    return movieID ? this._movieService.getMovieDetails(movieID,type1):EMPTY;
  } 
}
