import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UsersService} from "../users.service";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="userStream | async as user" class="panel">
      <span>{{ user._id }}</span>
      <span>{{ user.username }}</span>
      <span>{{ user.email }}</span>
      <app-user-view-status [user]="user"></app-user-view-status>
      <app-user-view-registered [user]="user"></app-user-view-registered>
      <app-user-view-subscription-end [user]="user"></app-user-view-subscription-end>
    </div>
  `,
  styles: [`
    .panel > * {
      display: block;
      padding: 5px;
    }
    .panel > *:nth-child(even) {
      background-color: #F2F2F2;
    }
  `]
})
export class UserComponent implements OnInit {

  userStream: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userStream = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.usersService.getUserStream(params.get('id'));
      });
  }

}
