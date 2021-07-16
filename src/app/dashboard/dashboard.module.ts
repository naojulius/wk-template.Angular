import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PagesRoutingModule } from './dashboard-routing.module';
import { UserModule } from './user/user.module';
import { WkThemeModule } from '../@wk-theme/wk-theme.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UserModule,
    WkThemeModule
  ]
})
export class DashboardModule { }
