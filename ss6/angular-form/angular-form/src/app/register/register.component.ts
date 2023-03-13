import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegisterReactive: FormGroup  ;

  constructor() {
    this.formRegisterReactive = new FormGroup(
      {
        email: new FormControl("?", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl("", [ Validators.required,Validators.minLength(6)]),
        country: new FormControl("", [Validators.required]),
        age: new FormControl("", [Validators.required,Validators.min(19),Validators.max(100)]),
        gender: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required,Validators.pattern('^\\+84\\d{9,10}$')])

      },
      {validators: this.reConfirmPass}
    )

  }

  ngOnInit(): void {

  }

  reConfirmPass(control: AbstractControl):{notSame: boolean} {
    return control.value.password === control.value.confirmPassword ?
      {notSame: false} : {notSame: true};


  }




}
