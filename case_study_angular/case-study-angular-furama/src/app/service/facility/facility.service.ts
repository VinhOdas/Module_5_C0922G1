import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  HTTP_FACILITY ="http://localhost:3000/facility";

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Facility[]> {

    return this.httpClient.get<Facility[]>(this.HTTP_FACILITY)

  }
}
