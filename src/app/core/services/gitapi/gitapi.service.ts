import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {

  constructor() {

  }

  makeListRepositoriesURL = (username:string) => `https://api.github.com/users/${username}/repos`;
  makeRepositoryURL = (username:string, repo:string) => `https://api.github.com/repos/${username}/${repo}`;

  async listRepositories(username:string) {
    const url = this.makeListRepositoriesURL(username);

    const response = await fetch(url);

    return await response.json();
  }

  async getRepoLanguages(username:string, repo:string){
    const url = this.makeRepositoryURL(username, repo)+"/languages";
    const response = await fetch(url);
    const json_response = await response.json();

    return Object.keys(json_response);
  }

  languageToColor(lang:string){
    const colors:any = {
      "c++": "#ff00a5",
      "javascript": "#e2e31c",
      "rust": "#dea584",
      "c#": "#009a18",
      "c": "#6a6b6a",
      "typescript": "#4967f9",
      "python": "#4d54b2",
      "go": "#00aeff",
      "html": "#f1300e",
      "css": "#a02f95",
      "scss": "#ff00eb"
    };

    return colors[lang.toLocaleLowerCase()] || "#ffffff";
  }
}
