import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from 'src/app/@wk-core/service/notifications/sweet-alert.service';
import { HTML_EMOJI } from 'src/app/@wk-theme/emoji';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private sweetAlertService: SweetAlertService
  ) { }
  ngOnInit(): void {
    this.sweetAlertService.showToastr(HTML_EMOJI.GRINNING_FACE + ' ceci est un test');
  }

}
