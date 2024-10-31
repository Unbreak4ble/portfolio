import { Component, Input } from '@angular/core';
import { badges_list } from './skill-badge.headers';
import { IconService } from '../../../core/services/icon/icon.service';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [],
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss'
})
export class SkillBadgeComponent {
  @Input("type") type:string|null = null;
  icon:string|null = "";
  name:string|null = "";

  constructor(private iconService:IconService){
  }

  ngAfterViewInit(){
    this.showBadge();
  }

  showBadge(){
    const badges_found = badges_list.filter(x => x.type?.toLowerCase() == this.type?.toLocaleLowerCase());

    if(badges_found.length == 0) return;

    const badge = badges_found[0];
    
    this.icon = "../../../assets/skills/"+badge.icon+".svg";
    this.name = badge.name;
  }
}
