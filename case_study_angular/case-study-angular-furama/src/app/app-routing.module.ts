import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./compoment/common/customer/customer.component";
import {HomeComponent} from "./compoment/common/home/home.component";
import {FacilityComponent} from "./compoment/common/facility/facility.component";
import {AddCustomerComponent} from "./compoment/common/customer/add-customer/add-customer.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {path: 'customer/list', component: CustomerComponent
  },
  {
    path: 'customer/add', component: AddCustomerComponent
  },
  {
    path: 'facility/list', component:FacilityComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
