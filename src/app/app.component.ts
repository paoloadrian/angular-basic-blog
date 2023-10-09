import { Component, OnDestroy } from '@angular/core';
import { UserService } from './services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  userIsLoggedIn: boolean;
  readonly title = 'My Super Blog';
  userSubscription: Subscription;

  constructor(private userService: UserService) {
    this.userIsLoggedIn = this.userService.userIsLoggedIn();
    this.userSubscription = this.userService.userStatusHasChanged$.subscribe((newStatus: boolean) => {
      this.userIsLoggedIn = newStatus;
    });
  }

  logout(): void {
    this.userService.logout();
  }

  ngOnDestroy(): void {
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
  }
}
