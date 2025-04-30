import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/charter.model';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?page=${page}`);
  }

  getCharacterByName(name: string, page: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?name=${name}&page=${page}`);
  }

  getCharacterBySpecies(species: string, page: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}?species=${species}&page=${page}`);
  }

  getCharacterById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}${id}`);
  }

}
