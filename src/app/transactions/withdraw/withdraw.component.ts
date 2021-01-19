import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/_services';
import {first} from 'rxjs/operators';
import { TransactionData } from 'src/app/_models/transaction-data';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  WithDraw=new FormGroup({});
  transdata:TransactionData={Id:"",username:"",Amount:0,transactionType:"",Role:""}
  Id:string="";
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService:AlertService,
    private router:Router,
    private route:ActivatedRoute
) { }

  ngOnInit(): void {
    this.WithDraw=this.formBuilder.group({
      Amount:['',Validators.required]
    });
    this.Id = this.route.snapshot.params['id'];
    this.accountService.getById(this.Id).pipe(first()).
    subscribe(
      x => {
        this.transdata.username.setValue(x.username);
        this.transdata.Role.setValue(x.Role);
    
    }
    );
  }
  onWithDraw(){
    if(this.accountService.userValue.savings>500)
    {
      this.accountService.userValue.savings=this.accountService.userValue.savings-this.WithDraw.value.Amount;   
      this.transdata.Id=this.Id;
      this.transdata.transactionType="WithDraw";
      this.transdata.Amount=this.WithDraw.value.Amount;
      this.accountService.add_Transaction(this.transdata); 
    }
    else{
    this.alertService.alert("Minimum balance of 500 should be mainitained");
    }
    this.router.navigateByUrl('/home');
  
    
  }


}
