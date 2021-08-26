import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LayoutModule} from "./components/layout/layout.module";
import {ListProductComponent} from "./components/product/list-product/list-product.component";
import {AddProductComponent} from "./components/product/add-product/add-product.component";
import {UpdateProductComponent} from "./components/product/update-product/update-product.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListProductComponent

  },
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: ":i/update",
    component:UpdateProductComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
