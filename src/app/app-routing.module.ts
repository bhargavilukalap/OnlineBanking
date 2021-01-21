import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


import { HomeComponent } from './home';
import { DepositsComponent } from './transactions/deposits/deposits.component';
import { WithdrawComponent } from './transactions/withdraw/withdraw.component';
//import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path:'admin',component:AdminComponent/*,canActivate:[AuthGuard],data:{roles:[Role.Admin]}*/},
    {path:'Deposits/:id',component:DepositsComponent/*,canActivate: [AuthGuard] ,data: { roles: [Role.User] }*/},
    {path:'WithDraw/:id',component:WithdrawComponent/*,canActivate: [AuthGuard] ,data: { roles: [Role.User] } */},
  //  { path: 'login', component:LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }