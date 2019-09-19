import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user-component/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
  providers: [UserServiceService]
})
export class UserListComponentComponent implements OnInit {

  createForm: FormGroup;
  positiveNumberPattern: any = /^d*[1-9]\d*$/;

  users: User[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.buildForm();
    this.users = this.userService.users;
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
      const usu = this.createForm.value;
      const nuevoId = this.users[this.users.length - 1].userId + 1;
      this.userService.addUser( new User(usu.name, usu.age, usu.gender, nuevoId) );
    }
  }
}
