import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { User } from '../CustomerLogin/CustomerLogin.model';
import { Observable } from 'rxjs';
 
 
@Injectable()
export class SecurityLogic implements CanActivate {
 
    constructor(private _router:Router, public _user:User ) {
    }
     
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if(this._user.token.length != 0){
        return true; //navigation allowed
     }
     //if navigation not allowed
     //it redirects to login page-->
     this._router.navigate(['/CustomerLogin']);
     return false;
    }
}
