import { Injectable } from '@angular/core';
import { MovieData } from './movie-data';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  // getMovieData(id: string): Observable<Array<MovieData>> {

  //   return this.http.get<Array<MovieData>>(`https://638492184ce192ac605bc39a.mockapi.io/Movie/${id}`);

  // }

  getMovieData(id: string) {

    return this.http.get(`https://638492184ce192ac605bc39a.mockapi.io/Movie/${id}`, { observe: "response" });

  }



}
