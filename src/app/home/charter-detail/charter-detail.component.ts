import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/charter.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-charter-detail',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './charter-detail.component.html',
  styleUrl: './charter-detail.component.scss'
})
/**
 * CharterDetailComponent is responsible for displaying the details of a specific character.
 * It retrieves the character ID from the route parameters and fetches the character data from the Rick and Morty API.
 * The component handles loading states and errors during data fetching.
 */
export class CharterDetailComponent implements OnInit {
  character: Character | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadCharacter(id);
      }
    });
  }

  loadCharacter(id: number): void {
    this.loading = true;
    this.rickAndMortyService.getCharacterById(id).subscribe({
      next: (data: any) => {
        this.character = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading character:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
