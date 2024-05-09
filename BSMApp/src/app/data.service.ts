import { Injectable } from '@angular/core';
import { IBook } from './Models/IBook';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  books!: IBook[];

  setBooks(books: IBook[]) {
    this.books = books;
  }

  getBookById(id: number): IBook {
    return this.books[id];
  }
}
