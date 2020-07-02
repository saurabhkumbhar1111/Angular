import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from './CustomerLogin.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'customer-login',
  templateUrl: './CustomerLogin.component.html'
})
export class CustomerLoginComponent {
  userObj:User = new User();

  constructor(public http:HttpClient){

  }
  Login(){
    this.http.post("https://localhost:44317/api/Security",this.userObj)
    .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Success(res){
    alert(res.token);  //gives token value
    this.userObj = new User();  //clear UI fields
  }
  Error(res){
    alert("Not a valid user");
  }
}
