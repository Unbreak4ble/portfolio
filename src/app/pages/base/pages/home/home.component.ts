import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { metatags } from './home.headers';
import { LandingPageComponent } from '../../../../shared/components/landing-page/landing-page.component';
import { SkillsComponent } from '../../../../shared/components/skills/skills.component';
import { ProjectsComponent } from '../../../../shared/components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingPageComponent, SkillsComponent, ProjectsComponent],
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
