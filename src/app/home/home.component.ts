import { Component } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    Role:string="";
    isAdmin:boolean=false;
    

    constructor(private accountService: AccountService) {

        console.log(this.accountService.userValue.Role);
        this.user = this.accountService.userValue;
    }
    ngOnInit(){
      /*  this.Role=this.user.Role;
        if(this.Role=='User')
        {
            this.isAdmin=false;
        }
        else
        {
            this.isAdmin=true;
        }
*/
    }
}