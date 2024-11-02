import { Component, ViewChild } from '@angular/core';
import { TeletypeAnimationComponent } from '../teletype-animation/teletype-animation.component';
import { aboutme } from '../../../core/constants/me/aboutme';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TeletypeAnimationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @ViewChild("intro_teletype") introTeletypeComponent:any;
  name:string = aboutme.name;
  description:string = aboutme.description;
  socials:any[] = aboutme.profiles;

  constructor(){

  }

  //ngAfterContentInit(){
  ngAfterViewInit(){
    this.setupIntroTeletype();
  }

  setupIntroTeletype(){
    if(this.introTeletypeComponent == null) return;
    
    this.introTeletypeComponent.addText("Hello World");
    this.introTeletypeComponent.addText("Hola Mundo");
    this.introTeletypeComponent.addText("哈囉世界");
    this.introTeletypeComponent.addText("हैलो वर्ल्ड");
    this.introTeletypeComponent.addText("Olá Mundo");
  }
}
