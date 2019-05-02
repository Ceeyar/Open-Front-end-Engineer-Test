import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Joke } from "../interfaces/joke";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class JokeService {

    constructor(private http: HttpClient) {}

    // HTTP request, get Categories:
    fetchCategories():Observable<string[]> {
        return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories');
    }

    // HTTP request, get joke by Category:
    fetchJokeByCategory(cat: string):Observable<any> {
        return this.http.get<Joke>('https://api.chucknorris.io/jokes/random?category='+ cat);
    }

    // HTTP request, get a random joke:
    fetchRandomJoke():Observable<any> {
        return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
    }
}
