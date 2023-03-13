import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../model/customer/customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  HTTP_CUSTOMER ="http://localhost:3000/customers";
  HTTP_CUSTOMER_TYPE ="http://localhost:3000/customerTypes";
  constructor(private httpClient: HttpClient) {

  }

  getAll():Observable<Customer[]> {

    // @ts-ignore
    return this.httpClient.get(this.HTTP_CUSTOMER);

  }

}
