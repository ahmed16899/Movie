import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors!:String
  constructor(private _AuthService:AuthService , private _router:Router) { }
  registerForm:FormGroup=new FormGroup({
    first_name: new FormControl(null,[Validators.required]),
    last_name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required , Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
    password: new FormControl(null,[Validators.required]),
    age: new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+$/)]),
  })

  ngOnInit(): void {
  }
  submitForm(formData:FormGroup)
  {
    //console.log(formData.value);
    this._AuthService.register(formData.value).subscribe((response)=>{
      if(response.message == "success")
      {
        //rout to login
        this._router.navigate(['login']);
      }
      else
      {
        this.errors='Email is Already Register';
      }
    })
    this.registerForm.reset();
  }
}
