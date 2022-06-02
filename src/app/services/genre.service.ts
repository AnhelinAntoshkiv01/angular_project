import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenre} from "../interfaces";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<IGenre[]> {
    return this.httpClient.get<IGenre[]>(urls.genres);
  }

}
