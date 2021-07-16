import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { MENU } from '../menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  menus: Array<any> = [];
  ngOnInit(): void {
    this.menus = MENU;
  }
  onClickMenu(uri_link: string | UrlTree){
    this.router.navigateByUrl(uri_link);
  }

}
