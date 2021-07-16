import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroIconModule } from 'ng-heroicon';
import { ICONS } from './icons';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    FooterComponent
  ],
  entryComponents: [
    SideBarComponent,
    NavBarComponent,
    FooterComponent
  ],
  exports: [
    SideBarComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(ICONS),
  ]
})
export class WkThemeModule { }
