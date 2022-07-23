import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RowdataComponent } from './rowdata/rowdata.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlltrendingComponent } from './alltrending/alltrending.component';
import { SearchComponent } from './search/search.component';
import { MoviescollectionComponent } from './moviescollection/moviescollection.component';
import { FirstInterceptor } from './Interceptor/first.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    MoviedetailsComponent,
    TopmoviesComponent,
    FavoritesComponent,
    RowdataComponent,
    AlltrendingComponent,
    SearchComponent,
    MoviescollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule
     
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:FirstInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
