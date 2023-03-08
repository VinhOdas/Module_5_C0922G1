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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerComponent,
    EmployeeComponent,
    ContractComponent,
    FacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
