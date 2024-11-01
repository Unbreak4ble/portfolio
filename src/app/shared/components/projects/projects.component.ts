import { Component } from '@angular/core';
import { aboutme } from '../../../core/constants/aboutme';
import { GitapiService } from '../../../core/services/gitapi/gitapi.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [];
  github_projects: any[] = [];

  constructor(private gitapiService: GitapiService){

  }

  ngAfterViewInit(){
    this.fecthGHProjects();
  }

  async fecthGHProjects(){
    const gh_profile = aboutme.profiles.filter((x:any) => x.type == "github")[0];

    if(gh_profile == null) return;

    const username = gh_profile.username;

    const repos = await this.gitapiService.listRepositories(username);

    const projects = repos.filter((x:any) => x.fork == false);

    this.github_projects = projects;
  }
  
  gotoProject(url:string|null){
    if(url == null) return;
    
    window.open(url, '_blank');
  }
}
