import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-loading-buttons-playground';
  saving = false;

  click(): void {
    this.saving = true;
    setTimeout(() => this.saving = false, 3000);
  }
}
