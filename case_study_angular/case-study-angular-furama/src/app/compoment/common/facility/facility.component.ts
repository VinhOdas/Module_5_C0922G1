import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility-type/facility-type.service";
import {Router} from "@angular/router";
import {RentTypeService} from "../../../service/rent-type/rent-type.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
      this.facilityService.getAll().subscribe(data =>{
        this.facilityList = data
      }),
    this.facilityTypeService.getAll().subscribe(data1 =>{
      this.facilityType = data1
    }),
    this.rentTypeService.getAll().subscribe(data2 =>{
      this.rentType = data2;
    })

  }

  ngOnInit(): void {
  }

}
