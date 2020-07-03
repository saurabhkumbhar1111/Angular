import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from './CustomerLogin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'customer-login',
  templateUrl: './CustomerLogin.component.html'
})
export class CustomerLoginComponent {
  //userObj:User = new User(); --> this creates local instance

  //to make userObj global, use dependency injection
  constructor(public http:HttpClient, public userObj:User,
    public routing:Router){
      //Dependency Injection
  }
  Login(){
    this.http.post("https://localhost:44317/api/Security",this.userObj)
    .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Success(res){
    this.userObj.token = res.token;
    this.routing.navigate(["Home"]);
    //this.userObj = new User();  //clear UI fields
  }
  Error(res){
    alert("Not a valid user");
  }
}
