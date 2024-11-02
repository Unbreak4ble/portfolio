import { Component } from '@angular/core';

@Component({
  selector: 'app-teletype-animation',
  standalone: true,
  imports: [],
  templateUrl: './teletype-animation.component.html',
  styleUrl: './teletype-animation.component.scss'
})
export class TeletypeAnimationComponent {
  private texts:string[] = [];
  private running:boolean = true;
  current_text:string = "";
  interval:number = 1;
  once:boolean = false;
  letter_interval:number = 200;
  word_interval:number = 3000;
  teletype_dash_flicker:string = '_';

  constructor(){
    this.setupFlicker();
  }

  async ngAfterViewInit(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.setupEngine();
  }

  addText(text:string){
    this.texts.push(text);
  }

  setupFlicker(){
    const interval = setInterval((()=>{
      if(!this.running){ 
        this.teletype_dash_flicker = '';
        clearInterval(interval);
        return;
      }

      if(this.teletype_dash_flicker == '_')
        this.teletype_dash_flicker = '';
      else
        this.teletype_dash_flicker = '_';
    }).bind(this), 400);
  }

  async setupEngine(){
    this.running = true;

    for(let i=0;; i++){
      if(i+1 > this.texts.length && this.once) break;
      if(i+1 > this.texts.length) i=0;

      this.current_text = "";

      for(const letter of this.texts[i]){
        this.current_text += letter;
        await new Promise(resolve => setTimeout(resolve, this.letter_interval));
      }
      
      await new Promise(resolve => setTimeout(resolve, this.word_interval));
    }

    this.running = false;
  }
}
