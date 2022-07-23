import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-alltrending',
  templateUrl: './alltrending.component.html',
  styleUrls: ['./alltrending.component.css']
})
export class AlltrendingComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _moviesService : MoviesService) { }
    img:string='https://image.tmdb.org/t/p/w500';
    type:string='';
    pageCounter:number=1;
    allTrending:any[]=[]
    allPages:number=0;
  ngOnInit(): void {
    this.type=this._ActivatedRoute.snapshot.params['type'];
    this._moviesService.getTrending(this._ActivatedRoute.snapshot.params['type'],this.pageCounter).subscribe((response)=>{
     // console.log(response)
      this.allTrending=response.results;
    })
    this._ActivatedRoute.data.subscribe((data)=>{
      this.allTrending =data['trending'].results;
      //this.movieRecommendations =data['recommendation'].results;
      this.allPages=data['trending'].total_pages
      console.log(data);
    });
  }
  viewMore()
  {
    this.pageCounter++;
    this._moviesService.getTrending(this._ActivatedRoute.snapshot.params['type'],this.pageCounter).subscribe((response)=>{
      this.allTrending.push(...response.results);
      console.log( this.allTrending);
    })
  }

}
