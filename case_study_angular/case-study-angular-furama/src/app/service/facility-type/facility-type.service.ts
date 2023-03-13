import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {FacilityType} from "../../model/facility/facility-type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  HTTP_FACILITY_TYPE ="http://localhost:3000/facilityType";

  constructor(private httpClient: HttpClient) {

  }

  getAll():Observable<FacilityType[]> {

    return this.httpClient.get<FacilityType[]>(this.HTTP_FACILITY_TYPE)
  }
}
