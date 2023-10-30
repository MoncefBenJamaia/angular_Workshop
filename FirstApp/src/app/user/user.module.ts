import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    AddUserComponent,
    UpdateUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
    
  ]
})
export class UserModule { }
