import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { Router } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from "./character-list/character-list.component";
import { PaginatorComponent } from "../shared/paginator/paginator.component";
import { ApiResponse, Character } from '../models/charter.model';
import { FooterComponent } from "../shared/footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CharacterListComponent, PaginatorComponent, FooterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
/**
 * HomeComponent is responsible for displaying a list of characters from the Rick and Morty API.
 * It handles searching, filtering, and pagination of characters.
 * The component interacts with the RickAndMortyService to fetch character data and uses Angular's Router for navigation.
 */
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: any[] = [];
  currentPage = 1;
  totalPages: number = 0;
  searchText = '';
  filterType = 'name';

  constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.currentPage).subscribe((data: ApiResponse) => {
      console.log(data);
      this.characters = data.results;
      this.filteredCharacters = [...this.characters];
      this.totalPages = data.info.pages;
    });
  }

  onSearchChange(searchData: {text: string, type: string}): void {
    this.searchText = searchData.text;
    this.filterType = searchData.type;

    if (this.searchText.trim() === '') {
      this.loadCharacters();
      return;
    }

    this.applyFilter(this.searchText, this.currentPage);
  }

  applyFilter(searchText: string, page: number): void {
    if (this.filterType === 'name') {
      this.searchByName(searchText, page);
    } else {
      this.searchBySpecies(searchText, page);
    }
  }

  searchByName(name: string, page: number): void {
    this.rickAndMortyService.getCharacterByName(name, page)
      .subscribe({
        next: (data: ApiResponse) => {
          this.filteredCharacters = data.results;
          this.totalPages = data.info.pages;
        },
        error: (error) => {
          this.filteredCharacters = [];
          this.totalPages = 0;
          console.log('No se encontraron personajes con ese nombre');
        }
      });
  }

  searchBySpecies(species: string, page: number): void {
    this.rickAndMortyService.getCharacterBySpecies(species, page)
      .subscribe({
        next: (data: ApiResponse) => {
          this.filteredCharacters = data.results;
          this.totalPages = data.info.pages;
        },
        error: (error) => {
          this.filteredCharacters = [];
          this.totalPages = 0;
          console.log('No se encontraron personajes de esa especie');
        }
      });
  }

  onFilterTypeChange(type: string): void {
    this.filterType = type;
    if (this.searchText.trim() !== '') {
      this.applyFilter(this.searchText, this.currentPage);
    }
  }

  onCharacterClick(id: number): void {
    this.router.navigate(['/character', id]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.searchText.trim() === '') {
      this.loadCharacters();
    } else {
      this.applyFilter(this.searchText, page);
    }
  }
}
