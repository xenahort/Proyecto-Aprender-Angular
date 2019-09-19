import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user-component/user.model';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  createForm: FormGroup;
  positiveNumberPattern: any = /^d*[1-9]\d*$/;

  users: User[] = [
    new User('Juan Carlos', 24, 'Male', 1),
    new User('Manuel', 28, 'Male', 2)
  ];

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.createForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, [Validators.required, Validators.pattern(this.positiveNumberPattern)]),
      gender: new FormControl('Male', Validators.required)
    });
  }

  submitForm() {
    if (this.createForm.valid) {
      console.log(this.createForm);
      const usu = this.createForm.value;
      const nuevoId = this.users[this.users.length - 1].userId + 1;
      this.users.push( new User(usu.name, usu.age, usu.gender, nuevoId) );
    }
  }
}
