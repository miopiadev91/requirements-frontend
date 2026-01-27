import { Component, inject, Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NgxToastrService {

  private toastr = inject(ToastrService)

  success(message: string, title?: string, position = 'toast-top-right') {
    this.toastr.success(message, title, { positionClass: position });
  }
  error(message: string, title?: string, position = 'toast-top-right') {
    this.toastr.error(message, title, { positionClass: position });
  }
  warning(message: string, title?: string, position = 'toast-top-right') {
    this.toastr.warning(message, title, { positionClass: position });
  }
  info(message: string, title?: string, position = 'toast-top-right') {
    this.toastr.info(message, title, { positionClass: position });
  }
}
