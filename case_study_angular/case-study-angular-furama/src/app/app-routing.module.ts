import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./compoment/common/customer/customer.component";
import {HomeComponent} from "./compoment/common/home/home.component";
import {FacilityComponent} from "./compoment/common/facility/facility.component";
import {AddCustomerComponent} from "./compoment/common/customer/add-customer/add-customer.component";
import {ContractComponent} from "./compoment/common/contract/contract.component";
import {EditCustomerComponent} from "./compoment/common/customer/edit-customer/edit-customer.component";
import {AddFacilityComponent} from "./compoment/common/facility/add-facility/add-facility.component";
import {EditFacilityComponent} from "./compoment/common/facility/edit-facility/edit-facility.component";
import {AddContractComponent} from "./compoment/common/contract/add-contract/add-contract.component";

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
    path: 'customer/edit/:id', component: EditCustomerComponent
  },
  {
    path: 'facility/list', component:FacilityComponent
  },
  {
    path: 'facility/add', component:AddFacilityComponent
  },
  {
    path: 'facility/edit/:id', component:EditFacilityComponent
  },
  {
    path: 'contract/list', component:ContractComponent
  },
  {
    path: 'contract/add', component:AddContractComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
