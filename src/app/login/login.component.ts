import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userEmail = new FormControl('');
  userPassword = new FormControl('');

  onClick() {
    console.log('User Email -> ' + this.userEmail.value);
    console.log('User Password -> ' + this.userPassword.value);
  }
  // onInputName = ()=>{
  //   console.log(this.userEmail.value);
  // }
}
