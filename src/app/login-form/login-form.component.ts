import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() title: string;
  formLogin: FormGroup;
  @Output() showDashboard = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }
  goDashboard() {
    this.showDashboard.emit(true);
  }
}
