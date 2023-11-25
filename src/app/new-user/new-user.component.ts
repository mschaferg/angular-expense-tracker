import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss'
})
export class NewUserComponent implements OnInit {
  newUserForm!: any;

  @Output() isNewUser = new EventEmitter<boolean>();

  setFormFields() {
    this.newUserForm = this.formBuilder.group({
       username: ['', [Validators.required]],
       password: ['', [Validators.required]],
    })
  }

  constructor (
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.setFormFields()
  }

  submitNewUser() {
    if (!this.newUserForm.valid) {
      this.toastr.error('Please complete the form.', 'Error!')
      return
   } else {
      let inputParams = {
      username: this.newUserForm.value.username ? this.newUserForm.value.username : null,
      password: this.newUserForm.value.password ? this.newUserForm.value.password : null
   }
    this.loginService.addNewUser(inputParams).subscribe((success)=> {
      if (success.statuscode == 400) {
        this.toastr.error(`${success.message}`, 'Error!')
      } else if (success.statuscode == 200) {
        this.toastr.success('New user has been successfully created.', 'Success!')
        this.newUserForm.reset();
        this.isNewUser.emit(false)
      }
    })
  }
}

  cancel() {
    this.isNewUser.emit(false)
  }
}

export default NewUserComponent;
