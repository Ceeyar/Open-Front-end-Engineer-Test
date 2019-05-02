import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { JokeService } from './../../services/joke-service';
import { Subscription } from 'rxjs';
import { Joke } from './../../interfaces/joke';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  randomJoke: Joke;
  randomJokeSubscription: Subscription; 
  @Output() jokeToEmit = new EventEmitter<string>();
  constructor(private JokeService: JokeService) { }

  ngOnInit() {
  }

  tellRandomJoke() {
    this.JokeService.fetchRandomJoke().subscribe(jokeObj => {
      this.randomJoke = jokeObj;
    });
    
    if (this.randomJoke != null) {
      this.jokeToEmit.emit(this.randomJoke.value)
    } else {
      this.jokeToEmit.emit("sometimes no jokes are Jokes to! #haha");
    }
    
  }

  ngOnDestroy() {
    this.randomJokeSubscription.unsubscribe();
  }
}
