import {NgForm,
    FormGroup,
        FormControl,
            Validators,
FormBuilder} from '@angular/forms'

export class CustomerAddModel
{
    name:string = "";
    customerAddresses:Array<CustomerAddress> = new Array<CustomerAddress>();
    
    // Validation -->
    formCustomerGroup:FormGroup = null;
    constructor(){
        //tree structure of Form
        var _builder = new FormBuilder();  
        //creating structure using builder
        this.formCustomerGroup = _builder.group({});
        //adding validation to FormGroup --> name
        this.formCustomerGroup.addControl("namecontrol",
        new FormControl('', Validators.required));
         //adding validation to FormGroup --> address
        this.formCustomerGroup.addControl("addresscontrol",
        new FormControl('', Validators.required));

    }
     
}
export class CustomerAddress
{
    address:string = "";

}