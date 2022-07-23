import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _moviesService : MoviesService,
    private _router:Router) { }
  id:string='';
  type:string=''
  __movie:any={};
  id2:string='';
  pageCounter:number=1;
  allPages:number=0;
  //movieID = new BehaviorSubject('');
  movieRecommendations:any[]=[];
  pages:string[]=[];
  img:string='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this.id=this._ActivatedRoute.snapshot.params['id']
    this.type=this._ActivatedRoute.snapshot.params['type']
    console.log(this.id)
    this._ActivatedRoute.data.subscribe((data)=>{
      this.__movie =data['movie'];
      this.movieRecommendations =data['recommendation'].results;
      this.allPages=data['recommendation'].total_pages
    });
    
    /*this._moviesService.getMovieDetails(this.id,this.type).subscribe((response)=>{
      console.log(response)
      this.__movie =response
    })
    this._moviesService.getRecommendations(this.id,this.type,1).subscribe((response)=>{
      console.log(response) 
      this.movieRecommendations =response.results
    })*/

}
  viewMore()
  {
    this.pageCounter++;
    this._moviesService.getRecommendations(this._ActivatedRoute.snapshot.params['id'],this._ActivatedRoute.snapshot.params['type'],this.pageCounter).subscribe((response)=>{
      this.movieRecommendations.push(...response.results);
      console.log(this.pageCounter,this.allPages);
    })
  }
}
