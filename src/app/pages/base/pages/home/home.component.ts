import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { metatags } from './home.headers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private meta: Meta){
    for(const tag in metatags){
      const content:string = metatags[tag];
      meta.addTag({name: tag, content: content});
      meta.addTag({name: "og:"+tag, content: content});
    }
  }
}
