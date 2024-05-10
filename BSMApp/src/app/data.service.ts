import { Injectable } from '@angular/core';
import { IBook } from './Models/IBook';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  books: IBook[] = [];

  constructor(){
    // Generate 1000 dummy records for the Books array
    for (let i = 1; i <= 1000; i++) {
      const book: IBook = {
        Id: i,
        Name: `Book ${i}`,
        InStockAmount: this.getRandomNumber(1, 100),
        Price: this.getRandomNumber(10, 1000),
        Image: `https://source.unsplash.com/random/?a-book-cover&${i}`
      };
      this.books.push(book);
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBooks() {
    return this.books;
  }

  getBookById(id: number): IBook {
    return this.books[id];
  }

  addABook(book: IBook) {
    this.books.push(book);
  }

  editABook(book: IBook) {
    this.books[book.Id-1] = book;
  }

  removeABook(id: number) {
    this.books.splice(id-1, 1);
  }
}
