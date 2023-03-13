import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
    formAddReactive: FormGroup
  constructor() {
    this.formAddReactive = new FormGroup(
      {


      }
    )

  }

  ngOnInit(): void {
  }

}
