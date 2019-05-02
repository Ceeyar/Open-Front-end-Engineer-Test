import { Component, OnInit, OnDestroy } from '@angular/core';
import { Joke } from './../../interfaces/joke';
import { JokeService } from '../../services/joke-service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  categories: string[]; 
  joke$: Observable<Joke>;
  jokeSubscription: Subscription;
  jokeByCatSubscription: Subscription;

  constructor(private JokeService: JokeService) { }

  ngOnInit() {

      this.jokeSubscription = this.JokeService.fetchCategories().subscribe(res => {
      this.categories = res

    });

  }

  tellJoke(cat) {
    
    this.jokeByCatSubscription = this.JokeService.fetchJokeByCategory(cat).subscribe(jokeObj => {
      this.joke$ = jokeObj;
    });
  }

  ngOnDestroy() {
    this.jokeSubscription.unsubscribe();
    this.jokeByCatSubscription.unsubscribe();
  }
}
