import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intro to Programming at Progressive';

  topics = [
    'Angular',
    'Redux',
    'APIs'
  ];
  doit() {
    this.title = this.title.toUpperCase();
  }
}
