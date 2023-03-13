import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoment/common/header/header.component';
import { FooterComponent } from './compoment/common/footer/footer.component';
import { HomeComponent } from './compoment/common/home/home.component';
import { CustomerComponent } from './compoment/common/customer/customer.component';
import { EmployeeComponent } from './compoment/common/employee/employee.component';
import { ContractComponent } from './compoment/common/contract/contract.component';
import { FacilityComponent } from './compoment/common/facility/facility.component';
import { NavigationComponent } from './compoment/common/navigation/navigation.component';
import { AddCustomerComponent } from './compoment/common/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './compoment/common/customer/edit-customer/edit-customer.component';
import { AddFacilityComponent } from './compoment/common/facility/add-facility/add-facility.component';
import { EditFacilityComponent } from './compoment/common/facility/edit-facility/edit-facility.component';
import { AddContractComponent } from './compoment/common/contract/add-contract/add-contract.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    EmployeeComponent,
    ContractComponent,
    FacilityComponent,
    NavigationComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AddFacilityComponent,
    EditFacilityComponent,
    AddContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
