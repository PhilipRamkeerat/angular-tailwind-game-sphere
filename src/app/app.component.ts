import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games-tailwind';

  showMenu = false;
  toggleNavbar(){
    console.log('button clicked');

    this.showMenu = !this.showMenu;
  }
}
