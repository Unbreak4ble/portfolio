import { Injectable } from '@angular/core';
import { book } from './translation.header';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  listLanguages(): string[] {
    return Object.keys(book);
  }

  get(lang:string, type:string): string|null {
    const langs = this.listLanguages();
    if(!langs.includes(lang)) {
      throw Error("unavailable language");
    }

    return (book as any)[lang]?.[type];
  }
}
