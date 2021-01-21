import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({});
    loading = false;
    submitted = false;
    message:string="";
   users:any;

   

  constructor(private formBuilder:FormBuilder,private router:Router,private accountService:AccountService) {
   
   }
   ngOnInit() {
    this.accountService.get_AllUsers();  
    this.RegisterForm();              // Call student form when component is ready
  }
  RegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['User',Validators.required]
  });
}

  get f() { return this.registerForm.controls; }
}
  
 /* this.accountService.get_AllUsers().get().subscribe((res)=>
  {res.docs.forEach((doc)=>
    {this.users.push(doc.data());
    });
  });


  }
 
  onSubmit() {
    this.submitted = true;
  //  console.log(this.form.value.role);
    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
   // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    this.accountService.register(this.registerForm.value).then(res=>{
      console.log(res);
      this.message="registered successfully";
    }).catch(error=>{
      console.log(error);
    });
   /* this.accountService.register(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
               // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });*/

   // this.accountService.get_AllUsers().subscribe(users=>this.users=users);
  
   




