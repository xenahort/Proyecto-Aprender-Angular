import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user-component/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css'],
  providers: [UserServiceService]
})
export class UserDetailComponentComponent implements OnInit {

  public id: number;
  public user: User = null;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params.id);
    this.user = this.userService.getUser(this.id);
    if ( this.user == null ) {
      location.href = '/';
    }
  }

}
