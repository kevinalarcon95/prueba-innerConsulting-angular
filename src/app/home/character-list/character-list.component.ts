import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {

  @Input() characters: any[] = [];
  @Input() searchText: string = '';
  @Output() characterClick = new EventEmitter<number>();
filteredCharacters: any;

  onCharacterClick(id: number): void {
    this.characterClick.emit(id);
  }

}
