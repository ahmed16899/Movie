import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _moviesService : MoviesService) { }
  favorites:any[]=[];
  ngOnInit(): void {
    
    this._moviesService.geFavorites().subscribe((response)=>{
      this.favorites=response;
      console.log(response)
    });
  }

}
