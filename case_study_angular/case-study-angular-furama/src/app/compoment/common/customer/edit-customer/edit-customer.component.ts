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
  customerEdit: Customer = {};


  constructor(private  customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.formEditCustomer = new FormGroup({
      id: new FormControl(),
        name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
        gender: new FormControl("", [Validators.required]),
        idCard: new FormControl("", [Validators.required]),
        phoneNumber: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        address: new FormControl("", [Validators.required]),
        customerType: new FormControl("")
      });

    this.activeRouter.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null){
        this.getCustomerById(parseInt(id))
      }
    });

  }


  ngOnInit(): void {
    this.getAllCustomerTypes()
  }
  // phương thức để select chọn theo value có sán
  compareWith(o1: CustomerType, o2: CustomerType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
// lấy khách hàng theo id và gán giá trị vào form
  getCustomerById(id: number): void {
    debugger
    this.customerService.findById(id).subscribe(data => {
      this.formEditCustomer.patchValue(data);
    }, error => {
    }, () => {
    });
  }


  private getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(data2 => {
      this.customerType = data2
    })
  }

  submitEdit(): any {
    debugger
    this.customerEdit = this.formEditCustomer.value;
    if (this.formEditCustomer){
      let temp = this.customerService.saveEditCustomer(this.customerEdit.id,this.customerEdit).subscribe(data=>{
        if (temp != null && data) {
          alert('sửa thành công');
        }
          this.router.navigateByUrl('/customer/list')
        });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
    }


}
