import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit, OnDestroy {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  private initialPagesToShow = 3;

  constructor() {}

  ngOnInit(): void {
    console.log('PaginatorComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('PaginatorComponent destroyed');
  }


  loadNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToPage(page: number): void {
    this.pageChange.emit(page);
  }

  getPageNumbers(): number[] {
    let pageNumbers: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  getMaxInitialPages(): number {
    return Math.min(this.initialPagesToShow, this.totalPages - 1);
  }

  getLastVisibleBeforeEllipsis(): number {
    if (this.currentPage <= this.initialPagesToShow) {
      return this.getMaxInitialPages();
    } else if (this.currentPage === this.totalPages) {
      return this.currentPage - 1;
    } else {
      return this.currentPage;
    }
  }

  getVisiblePageNumbers(): number[] {
    const visiblePages: number[] = [];

    if (this.totalPages <= this.initialPagesToShow + 1) {
      for (let i = 1; i <= this.totalPages; i++) {
        visiblePages.push(i);
      }
    } else if (this.currentPage <= this.initialPagesToShow) {
      for (let i = 1; i <= this.getMaxInitialPages(); i++) {
        visiblePages.push(i);
      }
      visiblePages.push(this.totalPages);
    } else if (this.currentPage >= this.totalPages - 1) {
      for (let i = 1; i <= this.getMaxInitialPages() - 1; i++) {
        visiblePages.push(i);
      }
      for (let i = this.totalPages - 1; i <= this.totalPages; i++) {
        if (!visiblePages.includes(i)) {
          visiblePages.push(i);
        }
      }
    } else {
      for (let i = 1; i <= Math.min(2, this.initialPagesToShow - 1); i++) {
        visiblePages.push(i);
      }
      if (!visiblePages.includes(this.currentPage)) {
        visiblePages.push(this.currentPage);
      }
      visiblePages.push(this.totalPages);
    }

    return visiblePages.sort((a, b) => a - b);
  }

  shouldShowFirstEllipsis(): boolean {
    return this.currentPage > this.initialPagesToShow;
  }

  shouldShowLastEllipsis(): boolean {
    return this.currentPage < this.totalPages - 1 && this.totalPages > this.initialPagesToShow + 1;
  }
}
