import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-form-register',
  templateUrl: './user-form-register.component.html',
  styleUrls: ['./user-form-register.component.scss'],
})
export class UserFormRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formUserInfo = new FormGroup({
    name: new FormControl(),
    telefone: new FormControl(),
    address: new FormControl(),
  });
  onSubmit() {}
}
