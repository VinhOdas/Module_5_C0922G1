import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductSs7NavbarComponent} from "./product/product-ss7-navbar/product-ss7-navbar.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        ProductSs7NavbarComponent
    ],
    exports: [RouterModule, ProductSs7NavbarComponent]
})
export class AppRoutingModule { }
