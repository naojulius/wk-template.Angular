import { Component, HostListener, OnInit } from '@angular/core';
import { RIGHT_NAV_MENU } from '../nav-menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  constructor() { }
  // @HostListener('document:click', ['$event'])
  // documentClick(event: MouseEvent) {
  //   // this.menuState = true;
  //   //  this.dropDownState = true;
  // }
  right_menus: Array<any> = [];
  menuState: boolean = true;
  dropDownState: boolean = true;
  ngOnInit(): void {
    this.right_menus = RIGHT_NAV_MENU;
  }
  openUserMenu(){
    this.menuState = !this.menuState;
  }
  onClickDropDownState(){
    this.dropDownState = !this.dropDownState;
  }
}
