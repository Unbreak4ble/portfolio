import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {

  constructor() {

  }

  makeListRepositoriesURL = (username:string) => `https://api.github.com/users/${username}/repos`;

  async listRepositories(username:string) {
    const url = this.makeListRepositoriesURL(username);

    const response = await fetch(url);

    return await response.json();
  }
}
