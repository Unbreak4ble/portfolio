import { Component } from '@angular/core';
import { headers } from './navbar.headers';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  onclick: ((id:string)=>void)|null = null;
  items:any[] = headers.items;

  constructor(){

  }

  onClick(callback:((id:string)=>void)){
    this.onclick = callback;
  }

}
