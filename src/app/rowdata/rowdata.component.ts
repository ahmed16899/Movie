import { Component, Injectable, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-rowdata',
  templateUrl: './rowdata.component.html',
  styleUrls: ['./rowdata.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RowdataComponent implements OnInit {

  constructor(private _moviesService : MoviesService) { }
  @Input() type:string='';
  @Input() arrayData!:any[];
  

  typeData:any[]=[];
  img:string='https://image.tmdb.org/t/p/w500';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  ngOnInit(): void {
    /*this._moviesService.getTrending(this.type,1).subscribe((response)=>{
      this.typeData=response.results
        console.log( this.typeData);     
    });*/
  }

}
