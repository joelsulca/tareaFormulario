import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  loadSpinner = false;
  showHome = false;
  title = 'Inicio de sesión';
  openLogin(evt) {
    this.loadSpinner = true;
    setTimeout(() => {
      this.isVisible = evt;
      this.loadSpinner = false;
    }, 1000);
  }
  dashboardVisible() {
    this.showHome = true;
  }
}
