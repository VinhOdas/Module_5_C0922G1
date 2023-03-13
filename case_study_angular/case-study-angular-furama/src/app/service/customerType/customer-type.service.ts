import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer/customer-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  HTTP_CUSTOMER_TYPE ="http://localhost:3000/customerTypes";

  constructor(private httpClient: HttpClient) {

  }


  getAllCustomerType():Observable<CustomerType[]>{

    // @ts-ignore
    return this.httpClient.get(this.HTTP_CUSTOMER_TYPE)
  }
}
