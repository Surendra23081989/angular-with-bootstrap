import { Component, OnInit } from '@angular/core';
import { AuthorService } from './shared/author.service';
import { Observable, observable } from 'rxjs';
import { Author } from './shared/author';
import { ShowByNamePipe } from './show-by-name.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-with-bootstrap';
  constructor(private autherService: AuthorService) {}
  authors: Author[] = [];
  ngOnInit(): void {
    this.autherService.getAuthors().subscribe((result) => {
      this.authors = result;
    });
  }
}
