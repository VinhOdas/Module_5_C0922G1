import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../../model/customer/customer-type";
import {Customer} from "../../../../model/customer/customer";
import {CustomerTypeService} from "../../../../service/customerType/customer-type.service";
import {CustomerService} from "../../../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  formEditCustomer: FormGroup;
  customerType: CustomerType[] = []
  customerEdit: Customer[] = [];

  constructor(private  customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.formEditCustomer = new FormGroup({
        name: new FormControl("", [Validators.required]),
        dateOfBirth: new FormControl("", [Validators.required]),
        gender: new FormControl("", [Validators.required]),
        idCard: new FormControl("", [Validators.required]),
        phoneNumber: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        address: new FormControl("", [Validators.required]),
        customerType: new FormControl("")
      }
    )
    this.activeRouter.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null){
        this.customerService.findById(parseInt(id)).subscribe( data =>{
            this.customerEdit = data;
            this.formEditCustomer.patchValue(this.customerEdit)
        })
      }
    })

  }


  ngOnInit(): void {
    this.getAllCustomerTypes()
  }

  private getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(data2 => {
      this.customerType = data2
    })
  }

  submit() {
    const customer = this.formEditCustomer.value;
    this.customerService.saveEditCustomer(customer).subscribe(data =>{
      alert('Cập nhật thành công');
    });
  }
}
