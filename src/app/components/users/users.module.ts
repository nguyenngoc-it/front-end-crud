import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path:'useredit',
    component:UserEditComponent
  },
  {
    path:'useradd',
    component:UserAddComponent
  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
   [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class UsersModule {
}
