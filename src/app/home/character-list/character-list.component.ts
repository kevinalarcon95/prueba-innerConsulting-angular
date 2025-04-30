import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
/**
 * CharacterListComponent is responsible for displaying a list of characters.
 * It takes an array of characters and a search text as inputs, and emits an event when a character is clicked.
 * The component uses Angular's Input and Output decorators to manage data flow between parent and child components.
 */
export class CharacterListComponent {

  @Input() characters: any[] = [];
  @Input() searchText: string = '';
  @Output() characterClick = new EventEmitter<number>();
filteredCharacters: any;

  onCharacterClick(id: number): void {
    this.characterClick.emit(id);
  }

}
