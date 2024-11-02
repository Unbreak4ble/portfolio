import { Component } from '@angular/core';
import { aboutme } from '../../../core/constants/me/aboutme';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year:number = new Date().getFullYear();
  full_name:string = aboutme.name+" "+aboutme.last_name;
  socials:any[] = aboutme.profiles;

  constructor(){
    
  }
}
