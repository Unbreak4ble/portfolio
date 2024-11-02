import { Component, ViewChild } from '@angular/core';
import { TeletypeAnimationComponent } from '../teletype-animation/teletype-animation.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TeletypeAnimationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @ViewChild("intro_teletype") introTeletypeComponent:any;

  constructor(){

  }

  //ngAfterContentInit(){
  ngAfterViewInit(){
    this.setupIntroTeletype();
  }

  setupIntroTeletype(){
    if(this.introTeletypeComponent == null) return;
    
    this.introTeletypeComponent.addText("hello world");
  }
}
