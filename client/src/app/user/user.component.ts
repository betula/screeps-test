import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UsersService} from "../users.service";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="userStream | async as user">
      <div class="panel">
        <span>{{ user._id }}</span>
        <span>{{ user.username }}</span>
        <span>{{ user.email }}</span>
        <app-user-view-status [user]="user"></app-user-view-status>
        <app-user-view-registered [user]="user"></app-user-view-registered>
        <app-user-view-subscription-end [user]="user"></app-user-view-subscription-end>
        <app-user-view-additional-info [user]="user" *ngIf="isViewMode"></app-user-view-additional-info>
        <app-user-editor-additional-info [user]="user" *ngIf="isEditMode"></app-user-editor-additional-info>
      </div>

      <button (click)="toEditMode()" *ngIf="isViewMode">EDIT</button>
      <button (click)="toViewMode()" *ngIf="isEditMode">CANCEL</button>
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

  isEditMode = false;

  get isViewMode() {
    return !this.isEditMode;
  }

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

  toEditMode() {
    this.isEditMode = true;
  }

  toViewMode() {
    this.isEditMode = false;
  }

}
