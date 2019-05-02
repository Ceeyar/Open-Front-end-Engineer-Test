import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Open-Front-end-Engineer-Test';

  titleJoke = "When Thanos goes to sleep every night, he checks his closet for Chuck Norris!";

  constructor() {}
 
  getJoke(message: string) {
    
    if (message.length > 0) { /* second check just to be safe */
    this.titleJoke = message;
    }
  }

}
