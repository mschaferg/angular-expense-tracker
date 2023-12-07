import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: any;

  @Output() isLoggedIn = new EventEmitter<boolean>();
  @Output() isNewUser = new EventEmitter<boolean>();
  @Output() user_id = new EventEmitter<number>();

  setFormFields() {
     this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
     })
  }
  
  constructor(
     private formBuilder: FormBuilder,
     public toastr: ToastrService,
     public loginService: LoginService,
     public router: Router,
     public spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.setFormFields()
  }

  login() {
    this.spinner.show()
    if (!this.loginForm.valid) {
      this.spinner.hide();
      this.toastr.error('Please complete the form.', 'Error')
    } else {
      let inputParams = {
      username: this.loginForm.value.username ? this.loginForm.value.username : null,
      password: this.loginForm.value.password ? this.loginForm.value.password : null
   }
    this.loginService.login(inputParams).subscribe((success)=> {
      if (success.result == true) {
        this.spinner.hide();
        this.isLoggedIn.emit(true);
        this.user_id.emit(success.id)
      } else {
        this.spinner.hide();
        this.toastr.error('Please enter valid credentials.', 'Error!')
      }
    })
  }
  }

  newUser() {
    this.isNewUser.emit(true);
  }

}

export default LoginComponent;
