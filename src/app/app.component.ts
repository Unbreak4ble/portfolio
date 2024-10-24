import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguagePromptComponent } from './shared/components/language-prompt/language-prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LanguagePromptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio';
}
