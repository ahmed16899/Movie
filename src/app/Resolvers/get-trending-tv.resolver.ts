import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesService } from '../Services/movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class GetTrendingTVResolver implements Resolve<boolean> {
  constructor(private _movieService:MoviesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
   return   this._movieService.getTrending('tv',1);
  }
}
