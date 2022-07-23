import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errors!:String
  constructor(private _AuthService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
    password: new FormControl(null,[Validators.required]),
  })
  submitForm(formData:FormGroup)
  {
    //console.log(formData.value);
    this._AuthService.login(formData.value).subscribe((response)=>{   
      if(response.message == "success")
      {
        //console.log(response)
        //rout to login
        localStorage.setItem('token',response.token)
        this._router.navigate(['home']);
        this._AuthService.setUserData();
      }
      else
      {
        this.errors=response.message;
      }
    })
    //this.loginForm.reset();
  }
}
