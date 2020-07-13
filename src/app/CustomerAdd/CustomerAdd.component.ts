import { Component } from '@angular/core';
import { CustomerAddModel, CustomerAddress} from "./CustomerAdd.model"
import { HttpClient} from "@angular/common/http"
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'customer-add',
  styleUrls: ['./CustomerAdd.component.css'],
  templateUrl: './CustomerAdd.component.html'
})

export class CustomerAddComponent {
  customerObj:CustomerAddModel = null;  //single record obj
  customerObjs:Array<CustomerAddModel> = new Array<CustomerAddModel>(); //collection obj

  customerAddress:CustomerAddress = new CustomerAddress();
  
  displayedColumns:string[] = ['address'];
  dataSource: MatTableDataSource<CustomerAddress>;
  //dataSource = new MatTableDataSource(this.customerObj.customerAddresses);

  constructor(public httpobj:HttpClient){
    this.customerObj = new CustomerAddModel();  //single record
  }

  AddAddress(){
    this.customerObj.customerAddresses.push(this.customerAddress); //push single address to Addresses array
    this.dataSource = new MatTableDataSource(this.customerObj.customerAddresses);
    this.customerAddress = new CustomerAddress();  //clear UI field
  }
  Submit(){
    var custDto:any = {};
    custDto.name = this.customerObj.name;
    custDto.addresses =[];
    custDto.addresses = this.customerObj.customerAddresses;

    this.httpobj.post("https://localhost:44317/api/CustomerAPI", custDto)
    .subscribe(res=>this.Success(res),
    res=>this.Error(res));

  }
  Success(res){
    this.customerObjs = res; //set collection of 'recs' received from server
    this.customerObj = new CustomerAddModel(); // clear UI fields
  }
  Error(res){
    alert(res);
  }
}
