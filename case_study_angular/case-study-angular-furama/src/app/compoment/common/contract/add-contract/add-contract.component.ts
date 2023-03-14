import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
    formAddContract: FormGroup
  constructor() {
    this.formAddContract = new FormGroup(
      {
        id: new FormControl("",[Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        deposit: new FormControl("", [Validators.required]),
        customer: new FormControl("", [Validators.required]),
        facility: new FormControl("", [Validators.required])


      }
    )

  }

  ngOnInit(): void {
  }

}
