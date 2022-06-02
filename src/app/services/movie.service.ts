import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IMovies} from "../interfaces";
import { urls } from '../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(page: number = 1): Observable<IMovies> {
    return this.httpClient.get<IMovies>(urls.movies, {params: {page}});
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movies}/${id}`);
  }
}
