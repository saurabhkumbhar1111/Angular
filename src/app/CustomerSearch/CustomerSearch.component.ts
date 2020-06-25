import { Component } from '@angular/core';
import { CustomerAddModel } from '../CustomerAdd/CustomerAdd.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';




@Component({
    selector: 'CustomerSearch',
    templateUrl: './CustomerSearch.component.html'
  })


  export class CustomerSearchComponent {
    customerName:string = "";
    CustomerModels:Array<CustomerAddModel> = new Array<CustomerAddModel>();
    constructor(public http:HttpClient){
      

    }
    search(){
      this.http.get("https://localhost:44317/api/CustomerAPI?customerName="
       + this.customerName)
       .subscribe(res=>this.successs(res), res=>this.error(res))

    }
    successs(res){
      this.CustomerModels = res;
    }
    error(res){

    }
  }