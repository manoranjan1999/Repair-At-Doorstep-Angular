import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RaydService } from '../rayd.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private raydService: RaydService) { }

  changePasswordForm = new FormGroup({
    emailId: new FormControl('', Validators.required),
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }
  // This function is for chnage the password
  change() {
    var data = {
      'emailId': this.changePasswordForm.get('emailId').value,
      'currentPassword': this.changePasswordForm.get('currentPassword').value,
      'newPassword': this.changePasswordForm.get('newPassword').value
    }
    this.raydService.changePassword(data);
  }

  confirmPassword = false;
  // This function is for validation with new password and confirm password
  confirm() {
    if (this.changePasswordForm.get('newPassword').value.length > 0) {
      if (this.changePasswordForm.get('newPassword').value == this.changePasswordForm.get('confirmPassword').value)
        this.confirmPassword = false;
      else
        this.confirmPassword = true;
    }

  }

}
