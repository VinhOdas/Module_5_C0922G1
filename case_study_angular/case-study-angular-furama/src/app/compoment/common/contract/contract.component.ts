import { Component, OnInit } from '@angular/core';
import {Contract} from "../../../model/contract/contract";
import {Customer} from "../../../model/customer/customer";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  customerList: Customer[] = [{
    id: 1,
    name: "Vinh",
  },

  ];

  villa: FacilityType ={
    id: 1,
    name: 'villa'
  }
  house: FacilityType ={
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
      name: 'Room Beach Front',
      area: 5,
      cost: 500000,
      maxPeople: 4,
      facilityType: this.room,
      rentType: this.year,
      standardRoom: 'vip',
      descriptionOtherCovenience: 'Có hồ bơi',
      poolArea: 5,
      numberOfFloors: 5,
      facilityFree: 'co xe dap',
      status: 1
    },

  ];

  contractList: Contract[]= [{
    id: 1,
    startDate: '17-11-2022',
    endDate:'19-11-2022',
    deposit: '2000',
    customer: this.customerList[0],
    facility: this.facilityList[0]

  },
    {
      id: 2,
      startDate: '17-11-2022',
      endDate:'19-11-2022',
      deposit: '2000',
      customer: this.customerList[1],
      facility: this.facilityList[1]

    },
    {
      id: 3,
      startDate: '17-11-2022',
      endDate:'19-11-2022',
      deposit: '2000',
      customer: this.customerList[2],
      facility: this.facilityList[1]

    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
