import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({});
  isSubmitted  =  false;
 msg:any;
  constructor(private authService:AuthService,private router:Router,private formBuilder:FormBuilder,private userData:UserDataService) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  login(){
   // console.log(this.loginForm);
    //console.log(this.loginForm.value.password);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
     // console.log(this.loginForm.value.)
      return;
    }
  
   
    this.authService.login(this.loginForm.value.userName,this.loginForm.value.password);
//    this.router.navigateByUrl('/admin');
  }
}
