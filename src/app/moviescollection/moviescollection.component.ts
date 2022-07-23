import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-moviescollection',
  templateUrl: './moviescollection.component.html',
  styleUrls: ['./moviescollection.component.css']
})
export class MoviescollectionComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _moviesService : MoviesService) { }
  @Input() type!:string;
  @Input() averageApprear!:string;
  pages:string[]=[];

  img:string='https://image.tmdb.org/t/p/w500';
  @Input() movies!:any[];
  pageCounter:number=1;




  ngOnInit(): void {
  }
  changeMovieID(movie:any)
  {
    //this.id2=this._moviesService.movieID.getValue();
    this.pageCounter=1;
    this.pages.push( this._moviesService.movieID.getValue());
    this._moviesService.movieID.next(movie.id);
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    this.pageCounter=1;
    if(this.pages.length!=0)
    {
      this._moviesService.movieID.next( this.pages[this.pages.length-1]);
      this.pages.pop();
    }
  }
}
