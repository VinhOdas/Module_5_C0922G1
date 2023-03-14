import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  formFacilityEdit: FormGroup;

  constructor( ) {

    this.formFacilityEdit = new FormGroup({
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
