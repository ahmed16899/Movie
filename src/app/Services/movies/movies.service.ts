import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   headers = new HttpHeaders();
  
  constructor(private _HttpClient:HttpClient) { }
  typeTop = new BehaviorSubject('');
  movieID = new BehaviorSubject('');
  searchDone = new BehaviorSubject('');
  homeData = new BehaviorSubject('null');
  header:any =new HttpHeaders().set("token",(localStorage.getItem('token')!));
  trendingMovie:any[]=[];
  trendingTV:any[]=[];

  

  getTrending(mediaType:string,pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=df2986477eee700e0cb71e2be0ff4cae&language=en-US&page=${pageNumber}`);
  }
  getMovieDetails(movieID:string , mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${movieID}?api_key=df2986477eee700e0cb71e2be0ff4cae&language=en-US`);
  }
  getTopRated(mediaType:string , pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=df2986477eee700e0cb71e2be0ff4cae&language=en-US&page=${pageNumber}`);
  }
  getRecommendations(movieID:string , mediaType:string,pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${movieID}/recommendations?api_key=df2986477eee700e0cb71e2be0ff4cae&language=en-US&page=${pageNumber}`);
  }
  addFavorite(movie:any ):Observable<any>
  {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/addToFavorites`,movie);
  }
  geFavorites():Observable<any>
  {
    //console.log(localStorage.getItem('token'));
    return this._HttpClient.get(`https://route-egypt-api.herokuapp.com/getFavorites`,{headers:this.headers});
  }
  search(name:string,pageNumber:number,type:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/${type}?query=${name}&api_key=df2986477eee700e0cb71e2be0ff4cae&language=en-US&page=${pageNumber}&include_adult=false`)
  }
}
//df2986477eee700e0cb71e2be0ff4cae