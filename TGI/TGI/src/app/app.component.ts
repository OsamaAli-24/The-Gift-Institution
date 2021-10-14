import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TGI';
  // public isCollapsed = false;
  // constructor(private router: Router) { }
//   this.router.events.subscribe((evt) => {
//     if (!(evt instanceof NavigationEnd)) {
//         return;
//     }
//     window.scrollTo(0, 0)
// });
collapsed = true;
     toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
     }

}
