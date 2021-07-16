import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconModule } from 'ng-heroicon';
import { WkThemeModule } from './@wk-theme/wk-theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ICONS } from './@wk-theme/icons'
import { SweetAlertService } from './@wk-core/service/notifications/sweet-alert.service';
import { ApiSweetAlertService } from './service/api-sweet-alert.service';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    WkThemeModule,
    AuthenticationModule,
    HeroIconModule.withIcons(ICONS),
  ],
  providers: [
    {provide: SweetAlertService, useClass: ApiSweetAlertService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
