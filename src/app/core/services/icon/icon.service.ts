import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  makeIconURL = (name:string) => "https://skillicons.dev/icons?i="+name;

}
