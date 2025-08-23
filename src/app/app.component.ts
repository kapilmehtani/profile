import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileWrapperComponent } from './profile-wrapper/profile-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profile';
}
