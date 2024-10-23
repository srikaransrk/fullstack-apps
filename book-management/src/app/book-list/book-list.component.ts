import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: []
})
export class BookListComponent {

  books$ : Observable<Book[]>

  constructor(private store : Store<AppState>){
    this.books$ = store.pipe(select('book'))
  }

  addBook(id : string, title : string, author: string){
    this.store.dispatch(AddBook({id, title, author}))
  }

  removeBook(bookId : string){
    this.store.dispatch(RemoveBook({bookId}))
  }

}
