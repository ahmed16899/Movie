import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router:ActivatedRoute,private _MoviesService:MoviesService
  ) { }
  searchData:any[]=[]
  type!:string
  img:string='https://image.tmdb.org/t/p/w500';
  movName!:string;
  pageCounter:number=1;
  allPages!:number;

  ngOnInit(): void {
    this.type=this._router.snapshot.params['type'];
    console.log(this._router.snapshot.params['type'])
    console.log(this._router.snapshot.params['name'])
    console.log(this.movName);
    this._MoviesService.searchDone.next(this._router.snapshot.params['name']);

    this._router.data.subscribe((data)=>{
      this.searchData =data['searchData'].results;
      this.allPages=data['searchData'].total_pages
    });
    //this._router.snapshot.params['subscribe'](()=>{
   // })
   /*this._MoviesService.searchDone.subscribe(()=>{
    this._MoviesService.search(this._MoviesService.searchDone.getValue(),this.pageCounter,this._router.snapshot.params['type']).subscribe((response)=>{
      this.searchData=response.results;
      console.log(response);
      this.allPages=response.total_pages

    })
   })*/
  }
  viewMore()
  {
    this.pageCounter++;
    this._MoviesService.search(this._router.snapshot.params['name'],this.pageCounter,this._router.snapshot.params['type']).subscribe((response)=>{
      this.searchData.push(...response.results);
      console.log(response);
    })
  }

}
