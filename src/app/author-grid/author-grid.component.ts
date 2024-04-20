import { Component } from '@angular/core';
import { Author } from './../shared/author';
import { AuthorService } from './../shared/author.service';
@Component({
  selector: 'app-author-grid',
  templateUrl: './author-grid.component.html',
  styleUrls: ['./author-grid.component.scss'],
})
export class AuthorGridComponent {
  constructor(private autherService: AuthorService) {}
  authors: Author[] = [];
  ngOnInit(): void {
    this.autherService.getAuthors().subscribe((result) => {
      this.authors = result.slice(0, 10);
    });
  }
}
