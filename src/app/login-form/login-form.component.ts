import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() title: string;
  formLogin: FormGroup;
  @Output() showHome = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  goToHome() {
    if (this.userService.authUser(this.formLogin.getRawValue())) {
      this.showHome.emit(true);
    } else {
      alert('Correo o contraseña inválida')
    }
  }
}
