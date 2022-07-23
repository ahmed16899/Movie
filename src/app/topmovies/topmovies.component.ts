import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';


@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {
  type:string=''

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _moviesService : MoviesService,
    private _router : Router) { }
  img:string='https://image.tmdb.org/t/p/w500';
  topMoviesData:any[]=[];
  pageNumber:number=1;
  x:string=this._moviesService.typeTop.getValue();
  ngOnInit(): void {

    this.type=this._ActivatedRoute.snapshot.params['type'];
    /*this._moviesService.typeTop.subscribe(()=>{
      this._moviesService.getTopRated(this._moviesService.typeTop.getValue(),this.pageNumber).subscribe((response)=>{
        this.topMoviesData=response.results;
          console.log( response);    
          this.x=this._moviesService.typeTop.getValue();
 
      });
    })*/
    this._ActivatedRoute.data.subscribe((data)=>{
      this.topMoviesData =data['topData'].results;
    });
  }
  changePage(check:boolean)
  {
    if(check==true)
    {
      this.pageNumber++;
    }
    else
    {
      this.pageNumber--;
    }
    this._moviesService.getTopRated(this._ActivatedRoute.snapshot.params['type'],this.pageNumber).subscribe((response)=>{
      this.topMoviesData=response.results;
      //this.x=this._moviesService.typeTop.getValue();
        //console.log( response);     
    });
  }
  /*@HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    //this._moviesService.typeTop.next('this.x');
    //console.log(event);
  }*/
}
