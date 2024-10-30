import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  @ViewChild("navbar") navbar_component:NavbarComponent|null = null;

  ngAfterViewInit(){
    const onclick = (id:string) => {
      alert("scrolling to: "+id);
    }
    this.navbar_component?.onClick(onclick);
  }
}
