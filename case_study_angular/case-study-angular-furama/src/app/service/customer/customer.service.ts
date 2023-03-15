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
    debugger
    return this.httpClient.get<Customer[]>(this.HTTP_CUSTOMER + '/' + number);

  }

  saveEditCustomer(id: number | undefined, customer: Customer):Observable<Customer[]> {
    debugger
    return  this.httpClient.patch<Customer[]>(this.HTTP_CUSTOMER +'/'+customer.id,customer)


  }

  delete(id: number | undefined) {
    return this.httpClient.delete<Customer>('http://localhost:3000/customers/' + id);
  }

  searchName(nameSearch: string) {
    return this.httpClient.get<Customer[]>(this.HTTP_CUSTOMER +'?name_like=' + nameSearch);


  }

  searchNameAndCustomerType(nameSearch: string, customerTypeSearch: string) {

    return this.httpClient.get<Customer[]>(this.HTTP_CUSTOMER + '?name_like=' + nameSearch + '&customerType.name=' + customerTypeSearch)

  }

  seachNameAndCustomerTypeTwo(name :string, customerType: string):Observable<Customer[]> {
    debugger
    return this.httpClient.get<Customer[]>

    (this.HTTP_CUSTOMER + '?name_like=' + name + '&customerType.name_like=' + customerType)


  };


}
