import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'ngx-loading-buttons-playground';
  saving = false;
  color = "blue";

  click(): void {
    this.saving = true;
    setTimeout(() => this.saving = false, 3000);
  }
}
