import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formReactive: FormGroup  ;

  constructor() {
    this.formReactive = new FormGroup(
      {
        email: new FormControl("?", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),

      },
    )

  }

  ngOnInit(): void {
  }

}
