import { Component } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    Role:string="";

    constructor(private accountService: AccountService) {

        console.log(this.accountService.userValue.Role);
        this.user = this.accountService.userValue;
    }
    ngOnInit(){
        this.Role=this.user.Role;
    }
}