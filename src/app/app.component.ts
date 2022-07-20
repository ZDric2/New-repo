import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Homepage', url: '/folder/home', icon: 'home' },
    { title: 'About Me', url: '/i', icon: 'person' },
    { title: 'Education', url: '/am', icon: 'book' },
    { title: 'Favorite Kpop G-group', url: '/zed', icon: 'heart' },
    { title: 'Contact', url: '/h', icon: 'link' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
