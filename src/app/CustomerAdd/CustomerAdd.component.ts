import { Component } from '@angular/core';
import { CustomerAddModel } from "./CustomerAdd.model"
import { HttpClient} from "@angular/common/http"

@Component({
  selector: 'customer-add',
  templateUrl: './CustomerAdd.component.html'
})

export class CustomerAddComponent {
  customerObj:CustomerAddModel = null;  //single record obj
  customerObjs:Array<CustomerAddModel> = new Array<CustomerAddModel>(); //collection obj
  
  constructor(public httpobj:HttpClient){
    this.customerObj = new CustomerAddModel();  //single record
  }
  Submit(){
    var custDto:any = {};
    custDto.name = this.customerObj.name;
    custDto.address = this.customerObj.address;

    this.httpobj.post("https://localhost:44317/api/CustomerAPI", custDto)
    .subscribe(res=>this.Success(res),
    res=>this.Error(res));

  }
  Success(res){
    this.customerObjs = res; //set collection
    this.customerObj = new CustomerAddModel(); // clear UI fields
  }
  Error(res){
    alert(res);
  }
}
