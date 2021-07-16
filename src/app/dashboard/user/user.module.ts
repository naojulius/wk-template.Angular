import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { WkThemeModule } from 'src/app/@wk-theme/wk-theme.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule, 
    WkThemeModule
  ]
})
export class UserModule { }
