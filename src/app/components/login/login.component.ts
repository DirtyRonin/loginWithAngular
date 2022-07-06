import { Component, Input, OnInit } from '@angular/core';
import { IAuth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() auth: IAuth;
  icon=faExclamationTriangle

  email: string;
  password: string;
  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {}
  onSubmit = () => {
    this.authService.login(this.email,this.password)
  };

  IsHidden = () => this.auth.status !== "Error"
}
