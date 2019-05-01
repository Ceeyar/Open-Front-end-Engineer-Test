import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Category } from "./../interfaces/category";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class CategoryService {

    constructor(private http: HttpClient) {}

    // HTTP request:
    fetchCategories():Observable<[Category]> {
        
        return this.http.get<[Category]>('https://api.chucknorris.io/jokes/categories');
    }
}
