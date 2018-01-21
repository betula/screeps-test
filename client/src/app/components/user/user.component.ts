import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs/Observable";
import { isNotEmptyDiff } from '../../libs/diff-utils';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="userStream | async as user">
      <div class="panel">
        <div>{{ user._id }}</div>
        <div>{{ user.username }}</div>
        <div>{{ user.email }}</div>
        <app-user-view-status [user]="user"></app-user-view-status>
        <app-user-view-registered [user]="user"></app-user-view-registered>
        <app-user-view-subscription-end [user]="user"></app-user-view-subscription-end>
        <app-user-view-additional-info [user]="user" *ngIf="isViewMode"></app-user-view-additional-info>
        <app-user-editor-additional-info
          *ngIf="isEditMode"
          [user]="user"
          [(diff)]="additionalInfoDiff"></app-user-editor-additional-info>
      </div>

      <button (click)="toEditMode()" *ngIf="isViewMode">EDIT</button>
      <div *ngIf="isEditMode">
        <button (click)="cancelEditMode()">CANCEL</button>
        <button
          class="save-button"
          (click)="additionalInfoDiffSave()" 
          *ngIf="isNotEmptyAdditionalInfoDiff()">SAVE</button>
      </div>
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
    .save-button {
      font-weight: bold;
    }
  `]
})
export class UserComponent implements OnInit {

  userStream: Observable<Object>;

  additionalInfoDiff: any;

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
        return this.usersService.getUser(params.get('id'));
      });
  }

  toEditMode() {
    this.isEditMode = true;
  }

  cancelEditMode() {
    this.isEditMode = false;
    this.additionalInfoDiff = null;
  }

  isNotEmptyAdditionalInfoDiff() {
    return isNotEmptyDiff(this.additionalInfoDiff);
  }

  additionalInfoDiffSave() {
    this.userStream.subscribe(user => {
      const diff = this.additionalInfoDiff;

      this.usersService.updateUserAdditionalInfo(user._id, {
        $upsert: diff.upserted,
        $delete: diff.deleted
      })
        .subscribe(additionalInfo => {

          console.log(additionalInfo);

          this.additionalInfoDiff = null;
          user.additionalInfo = additionalInfo;
        });
    });
  }

}
