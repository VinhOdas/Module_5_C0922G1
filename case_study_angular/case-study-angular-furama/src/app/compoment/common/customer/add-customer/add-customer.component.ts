import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";
import {CustomerService} from "../../../../service/customer/customer.service";
import {CustomerTypeService} from "../../../../service/customerType/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  formAddReactice: FormGroup
  customerType: CustomerType[] = []
  customers: Customer[] = [];


  constructor(private customerTypeService: CustomerTypeService, private customerService: CustomerService,private router: Router ) {
    this.formAddReactice = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        dateOfBirth: new FormControl("", [Validators.required]),
        gender: new FormControl("", [Validators.required]),
        idCard: new FormControl("", [Validators.required]),
        phoneNumber: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required,Validators.email]),
        address: new FormControl("", [Validators.required]),
        customerType: new FormControl("")
      }
    )
  }

  ngOnInit(): void {
    this.getAllCustomerTypes()
  }
  saveCreateCustomer(){
    console.log(this.formAddReactice.value);
  this.customerService.saveCreateCustomer(this.formAddReactice.value).subscribe(data =>{
      this.router.navigateByUrl('/customer/list')
      this.formAddReactice.reset();


  },error => {

    }
  )
  }
  // private getAll(){
  //   this.customerService.getAll().subscribe(data =>{
  //     this.customers = data
  //   })
  // }

  private getAllCustomerTypes(){
    this.customerTypeService.getAllCustomerType().subscribe(data2 =>{
      this.customerType = data2
    })
  }
}
