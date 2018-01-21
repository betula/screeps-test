import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-view-subscription-end',
  template: `
    <span
      [class.elapsed]="isElapsed()"
      [appTooltip]="user.subscriptionEndTimestamp">
        {{ user.subscriptionEndTimestamp | date }}
    </span>
  `,
  styles: [`
    .elapsed {
      opacity: .2;
    }
  `]
})
export class UserViewSubscriptionEndComponent {
  @Input() user;

  isElapsed() {
    return Date.now() > this.user.subscriptionEndTimestamp;
  }
}
