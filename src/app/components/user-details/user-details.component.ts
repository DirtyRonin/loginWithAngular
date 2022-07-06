import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: IUser;
  @Output() onLogout: EventEmitter<void> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  logout = () => this.onLogout.emit();
}
