import {Component, OnInit} from '@angular/core';
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


  constructor(private customerTypeService: CustomerTypeService, private customerService: CustomerService, private router: Router) {
    this.formAddReactice = new FormGroup(
      {
        name: new FormControl("",
          [Validators.required, Validators.pattern('^[A-Z][a-z]*([ ][A-Z][a-z]+)*$'),
          Validators.minLength(5),
          Validators.maxLength(25),
        ]),
        dateOfBirth: new FormControl("",
          [Validators.required, Validators.pattern('^\\d{4}[-]\\d{2}[-]\\d{2}$')
          ]),
        gender: new FormControl("",
          [Validators.required]),


        idCard: new FormControl("",
          [Validators.required, Validators.pattern('^\\d{9}$')


          ]),
        phoneNumber: new FormControl("",
          [Validators.required,Validators.pattern('^\\(\\+84\\)\\-\\d{9}$')
          ]),
        email: new FormControl("",
          [Validators.required, Validators.email]),
        address: new FormControl("",
          [Validators.required]),
        customerType: new FormControl("")
      }
    )
  }

  ngOnInit(): void {
    this.getAllCustomerTypes()
  }

  saveCreateCustomer() {
    console.log(this.formAddReactice.value);
    this.customerService.saveCreateCustomer(this.formAddReactice.value).subscribe(data => {
        this.router.navigateByUrl('/customer/list')
        this.formAddReactice.reset();


      }, error => {

      }
    )
  }


  private getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(data2 => {
      this.customerType = data2
    })
  }
}
