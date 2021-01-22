import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionData } from 'src/app/_models/transaction-data';
import { AccountService, AlertService } from 'src/app/_services';
import {first} from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {
  submitted:boolean=false;
  transdata:TransactionData={Id:"",username:"",Amount:0,transactionType:"",Role:""}
  Deposit=new FormGroup({});
  Id:string="";
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService:AlertService,
    private router:Router,
    private route:ActivatedRoute
) { }

  ngOnInit(): void {
    this.Deposit=this.formBuilder.group({
      Amount:['',Validators.required]
    });
    this.Id = this.route.snapshot.params['id'];
    this.accountService.getById(this.Id).pipe(first()).
    subscribe(
      x => {
        this.transdata.username=x.username;
        this.transdata.Role=x.Role;
        
    }
    );
  }
  get f(){ return this.Deposit.controls;}
  onDeposit(){
    this.submitted=false;
    this.loading=true;
    this.accountService.userValue.savings=this.accountService.userValue.savings+this.Deposit.value.Amount;  
   this.alertService.info("Deposited successfully") ;
    this.transdata.Id=this.Id;
    this.transdata.transactionType="Deposit";
    this.transdata.Amount=this.Deposit.value.Amount;
    //this.transdata.transactionDate=Date.toString();
    this.accountService.add_Transaction(this.transdata);
    //this.router.navigateByUrl('/home'); 
  }
  getTransactionList(){
   // this.Id= this.accountService.userValue.id;
    this.accountService.get_Transactions(this.Id);
  }

}
