import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RowdataComponent } from '../rowdata/rowdata.component';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _moviesService : MoviesService) { }
  img:string='https://image.tmdb.org/t/p/w500';
  movName!:string;
  trendingMovie:any[]=[];
  trendingTV:any[]=[];


  ngOnInit(): void {
    this._ActivatedRoute.data.subscribe((data)=>{
      this.trendingMovie =data['trendingMovie'].results;
      this.trendingTV =data['trendingTV'].results;
      this._moviesService.homeData.next('done')
      //console.log(this.trendingMovie)
    });
  }
  
  /*search(filmName:string,type:string)
  {
    console.log(filmName);
    this.pageCounter=1;
    this.typee=type
    this._MoviesService.search(filmName,1,type).subscribe((response)=>{
      if(type=='movie')
      {
        this.searchData=response.results;
        this.check=0;
      }
      else
      {
        this.searchDataTV=response.results;
        this.check=1;
      }
      this.allPages=response.total_pages;
      console.log(response);
    })
  }*/
  /*viewMore(filmName:string)
  {
    this.pageCounter++;
    this._MoviesService.search(filmName,this.pageCounter,this.typee).subscribe((response)=>{
      this.searchData.push(...response.results);
      console.log(response);
    })
  }*/
}
