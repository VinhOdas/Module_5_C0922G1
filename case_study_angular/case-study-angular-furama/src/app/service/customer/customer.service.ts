import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {CustomerType} from "../../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  HTTP_CUSTOMER ="http://localhost:3000/customers";
  constructor(private httpClient: HttpClient) {

  }

  getAll():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.HTTP_CUSTOMER);

  }


  saveCreateCustomer(customer: Customer):Observable<Customer> {
    return this.httpClient.post(this.HTTP_CUSTOMER,customer)

  }

  findById(number: number):Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.HTTP_CUSTOMER + "/" + number);

  }

  saveEditCustomer(customer: any):Observable<Customer[]> {
    return  this.httpClient.patch<Customer[]>(this.HTTP_CUSTOMER +'/'+customer.id,customer)


  }
}
