import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./compoment/common/customer/customer.component";
import {HomeComponent} from "./compoment/common/home/home.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {path: 'customer/list', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
