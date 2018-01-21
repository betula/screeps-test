import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-view-registered',
  template: `
    <span
      [appTooltip]="user.registeredTimestamp">
      {{ user.registeredTimestamp | date }}
    </span>
  `,
  styles: []
})
export class UserViewRegisteredComponent {
  @Input() user;
}
