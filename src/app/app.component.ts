import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Role, User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user:any;//User={Id: "",firstName:"",lastName:"",username:"",password:"",savings:0,Role:""}

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }
   /* get isAdmin(){
        return this.user && this.user.Role==Role.Admin;
    }*/
    logout() {
        this.accountService.logout();
    }
}