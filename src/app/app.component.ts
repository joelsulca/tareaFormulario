import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHome = false;
  title = 'Inicio de sesión';
  homeVisible() {
    this.showHome = true;
  }
}
