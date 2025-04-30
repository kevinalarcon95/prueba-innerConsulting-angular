import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText: string = '';
  filterType: string = 'name';
  detectedType: string = '';
  private searchTerms = new Subject<string>();

  @Output() searchChanged = new EventEmitter<{text: string, type: string}>();

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.searchText = term;
      this.detectSearchType();
      this.searchChanged.emit({text: this.searchText, type: this.filterType});
    });
  }

  onSearchInput(term: string): void {
    this.searchTerms.next(term);
  }

  detectSearchType(): void {
    const commonSpecies = ['human', 'alien', 'humanoid', 'animal', 'robot', 'cronenberg', 'mythological', 'poopybutthole', 'disease', 'parasite', 'unknown'];

    const searchLower = this.searchText.toLowerCase().trim();
    if (commonSpecies.includes(searchLower) ||
        commonSpecies.some(species => searchLower.includes(species))) {
      this.filterType = 'species';
      this.detectedType = 'species';
    } else {
      this.filterType = 'name';
      this.detectedType = 'name';
    }
  }
}
