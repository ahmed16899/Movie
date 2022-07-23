import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltrendingComponent } from './alltrending/alltrending.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './Guard/auth.guard';
import { LogregGuard } from './Guard/logreg.guard';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { GetRecommendationResolver } from './Resolvers/get-recommendation.resolver';
import { GetSearchResolver } from './Resolvers/get-search.resolver';
import { GetTopratedResolver } from './Resolvers/get-toprated.resolver';
import { GetTrendingTVResolver } from './Resolvers/get-trending-tv.resolver';
import { GetTrendingResolver } from './Resolvers/get-trending.resolver';
import { GetresolverResolver } from './Resolvers/getresolver.resolver';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';


const routes : Routes=[
  // {path:'',redirectTo:'home',canActivate:[AuthGuard],component:HomeComponent},
  // {path:'',redirectTo:'home',component:HomeComponent},

  {path:'home',canActivate:[AuthGuard],component:HomeComponent,resolve:{trendingMovie:GetTrendingResolver,trendingTV:GetTrendingTVResolver}},
  {path:'',canActivate:[AuthGuard],component:HomeComponent,resolve:{trendingMovie:GetTrendingResolver,trendingTV:GetTrendingTVResolver}},
  {path:'login',canActivate:[LogregGuard],component:SigninComponent},
  {path:'register',canActivate:[LogregGuard],component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'moviedetails/:id/:type',canActivate:[AuthGuard],component:MoviedetailsComponent,resolve:{movie:GetresolverResolver,recommendation:GetRecommendationResolver},},
  {path:'search/:name/:type',canActivate:[AuthGuard],component:SearchComponent,resolve:{searchData:GetSearchResolver}},
  {path:'toprated/:type',canActivate:[AuthGuard],component:TopmoviesComponent , resolve:{topData:GetTopratedResolver}},
  {path:'alltrending/:type',canActivate:[AuthGuard],component:AlltrendingComponent , resolve:{trending:GetTrendingResolver}},
  {path:'favorites',canActivate:[AuthGuard],component:FavoritesComponent},
  {path:'footer',component:FooterComponent}



];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
