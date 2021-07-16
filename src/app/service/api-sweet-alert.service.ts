import { SweetAlertService } from "../@wk-core/service/notifications/sweet-alert.service";
import  Swal from "sweetalert2";
export class ApiSweetAlertService extends SweetAlertService{
    showToastr(content: string): void {
        Swal.fire({
            html: content,
            timer: 2000,
            position: "top-end",
            showConfirmButton: false,
            width: 250,
            timerProgressBar: true,
        });
    }  
}