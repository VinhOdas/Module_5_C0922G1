import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {
  formFacilityAdd: FormGroup;

  constructor() {

    this.formFacilityAdd = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      area: new FormControl("",[Validators.required]),
      cost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      facilityType: new FormControl("", [Validators.required]),
      rentType: new FormControl("", [Validators.required]),
      standardRoom: new FormControl("",[Validators.required]),
      descriptionOtherCovenience: new FormControl("", [Validators.required]),
      poolArea: new FormControl("", [Validators.required]),
      floor: new FormControl("", [Validators.required]),
      facilityFree: new FormControl("",[Validators.required]),
      status: new FormControl("")
    })
  }

  ngOnInit(): void {
  }

}
