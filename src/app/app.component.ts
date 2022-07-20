import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About Me', url: '/i', icon: 'person' },
    { title: 'Education', url: '/am', icon: 'book' },
    { title: 'Favorites', url: '/zed', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Contact', url: '/folder/Spam', icon: 'link' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
