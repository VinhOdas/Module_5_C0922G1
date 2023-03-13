import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../service/customerType/customer-type.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList: Customer[] = [];
  customerTypes: CustomerType[]= [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService
              ,private router: Router) {


      this.customerService.getAll().subscribe(data =>
      {
          console.log(data)
        this.customerList = data

      })
      this.customerTypeService.getAllCustomerType().subscribe(data2 =>{
        this.customerTypes = data2
      })
  }

  ngOnInit(): void {
  }

}
