import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUsersPage } from './create-users';

@NgModule({
  declarations: [
    CreateUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUsersPage),
  ],
})
export class CreateUsersPageModule {}
