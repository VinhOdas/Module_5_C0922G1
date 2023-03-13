import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  xemthemFlag = false;

  villa: FacilityType = {
    id: 1,
    name: 'villa'
  }
  house: FacilityType = {
    id: 2,
    name: 'house'
  }
  room: FacilityType = {
    id: 3,
    name: 'room'
  }

  year: RentType = {
    id: 1,
    name: 'year'
  }
  month: RentType = {
    id: 2,
    name: 'month'
  }
  facilityList: Facility[] = [{
    id: 1,
    name: 'Villa Beach Front',
    area: 5,
    cost: 500000,
    maxPeople: 4,
    facilityType: this.villa,
    rentType: this.year,
    standardRoom: 'vip',
    descriptionOtherCovenience: 'Có hồ bơi',
    poolArea: 5,
    numberOfFloors: 5,
    facilityFree: 'co xe dap',
    status: 1
  },
    {
      id: 2,
      name: 'Villa Beach Front',
      area: 5,
      cost: 500000,
      maxPeople: 4,
      facilityType: this.villa,
      rentType: this.year,
      standardRoom: 'vip',
      descriptionOtherCovenience: 'Có hồ bơi',
      poolArea: 5,
      numberOfFloors: 5,
      facilityFree: 'co xe dap',
      status: 1
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
