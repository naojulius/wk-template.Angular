import { Injectable } from "@angular/core";


@Injectable()
export abstract class SweetAlertService {
  abstract showToastr(content: string): void;
}
