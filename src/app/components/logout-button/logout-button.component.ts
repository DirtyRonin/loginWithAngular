import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {
  @Output() onLogout: EventEmitter<void> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => this.onLogout.emit();

}
