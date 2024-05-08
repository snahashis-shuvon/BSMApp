import { CommonModule, NgFor } from '@angular/common';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IBook } from '../Models/IBook';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgFor, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {
  Books: IBook[] = [];
  displayedColumns: string[] = ['Name', 'InStockAmount', 'Price', 'Image'];
  dataSource: MatTableDataSource<IBook>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Generate 1000 dummy records for the Books array
    for (let i = 1; i <= 1000; i++) {
      const book: IBook = {
        Name: `Book ${i}`,
        InStockAmount: this.getRandomNumber(1, 100),
        Price: this.getRandomNumber(10, 1000),
        Image: `https://source.unsplash.com/random/?book&${i}` // Example image URL
      };
      this.Books.push(book);
    }
    this.dataSource = new MatTableDataSource(this.Books);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}