import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/charter.model';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
/**
 * RickAndMortyService is responsible for interacting with the Rick and Morty API.
 * It provides methods to fetch characters, character details, and filter characters by name or species.
 * The service uses HttpClient to make HTTP requests to the API.
 */
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
