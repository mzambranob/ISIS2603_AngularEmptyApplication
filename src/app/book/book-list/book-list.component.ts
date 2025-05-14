import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookDetail } from '../book-detail/book-detail';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  selected: boolean = false;
  selectedBook!: BookDetail;

  books: Array<BookDetail> = [];

  constructor(private bookService: BookService) { }

  getBooks():void {
    this.bookService.getBooks().subscribe((books: BookDetail[]) => {
      this.books = books;
    });
  }

  onSelected(book: BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
