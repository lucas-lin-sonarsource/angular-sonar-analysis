import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sonar-analysis';
  ip = "192.168.12.42"; // Sensitive
  ip2 = "192.168.12.42"; // Sensitive
}
