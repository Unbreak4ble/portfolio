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
  current_text:string = "";
  interval:number = 1;
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
    setInterval((()=>{
      if(this.teletype_dash_flicker == '_')
        this.teletype_dash_flicker = '';
      else
        this.teletype_dash_flicker = '_';
    }).bind(this), 400);
  }

  async setupEngine(){
    for(let i=0;; i++){
      if(i+1 >= this.texts.length) i=0;

      console.log("go for launch");
      for(const letter of this.texts[i]){
        this.current_text += letter;
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      await new Promise(resolve => setTimeout(resolve, 3000));

      this.current_text = "";
    }
  }
}
