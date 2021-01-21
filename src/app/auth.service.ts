import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { User } from './user';
import { UserDataService } from './user-data.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

 tempUser:any;
 tempAdmin:any;
 msguser:boolean=false;
 msgadmin:boolean=false;
  constructor(private router:Router,private userData:UserDataService) { }
  public login(userName:string,password:any){
   //no error until here
   localStorage.setItem('ACCESS_TOKEN', "access_token");
   console.log('token Assigned');
    
    /*this.userData.getUserById(Id).subscribe(data=>{this.tempUser=data},
      error=>{console.log(error);
        this.msguser=true;
    });
console.log(this.tempUser);
  /*  if(this.msguser==true)
    {
      this.userData.getAdminById().subscribe(data=>{this.tempAdmin=data},
        error=>{console.log(error);
          this.msgadmin=true;
      });
    }
   
 
  
   else if(password==this.tempUser.password)
    {   //this is for user .may be need to create a getContact for admin too
        localStorage.setItem('ACCESS_TOKEN', "access_token");
        this.router.navigate(['/user-access'/*,{CustomerName:this.tempUser.CustomerName}*/
      //]);
   // }
    
   /* else if(password==this.tempUser.password && this.tempUser.Role=="admin")
    {
      localStorage.setItem('ACCESS_TOKEN', "access_token");
      //this.router.navigate(['/admin',{CustomerName:this.tempUser.CustomerName}]);
    }*/
   /* else 
     this.router.navigateByUrl('/login');*/
  }

  public isLoggedIn(){
    console.log(localStorage.getItem('ACCESS_TOKEN') !== null);
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

 /* public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return token!=null;
  }*/
  }
  


