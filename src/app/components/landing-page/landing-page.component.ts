import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { IAuth } from 'src/app/models/auth';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  auth: IAuth = { UserId: '', IsAuthenticated: false,status:"Logged Out",message:"" };
  subscription: Subscription;

  currentUser: IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.subscription = authService.onUserChange().subscribe((auth) => {
      this.auth = auth;
      console.log(`auth is comming: ${auth.IsAuthenticated} , ${auth.UserId}`)
      if (auth.IsAuthenticated) this.fetchCurrentUser(auth);
    });
  }

  ngOnInit(): void {
    this.fetchCurrentUser(this.auth)
  }

  private fetchCurrentUser = (auth: IAuth): void => {
    if (auth.IsAuthenticated)
      this.userService
        .getUser(this.auth.UserId)
        .subscribe((result) => (this.currentUser = result ?? ({} as IUser)));
  };

  logout = () => this.authService.logout();
}
