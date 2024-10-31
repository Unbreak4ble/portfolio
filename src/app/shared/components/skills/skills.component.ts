import { Component } from '@angular/core';
import { SkillBadgeComponent } from '../skill-badge/skill-badge.component';
import { aboutme } from '../../../core/constants/aboutme';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBadgeComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = aboutme.skills;
  items:any[] = [];

  constructor(){
    //console.log(this.skills);
  }
}
