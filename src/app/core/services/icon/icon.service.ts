import { Injectable } from '@angular/core';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  readonly dir = "../../../assets/skills/";
  
  constructor() { }

  makeIconURL = (name:string) => "https://skillicons.dev/icons?i="+name;

  makeLocalIcon(name:string){
    return this.dir+name+".svg";
  }
}
