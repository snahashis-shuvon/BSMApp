import { CommonModule, NgFor } from '@angular/common';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IBook } from '../Models/IBook';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgFor, MatFormFieldModule, MatInputModule, MatTableModule, 
    MatSortModule, MatPaginatorModule, MatIconModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {
  Books: IBook[] = [];
  displayedColumns: string[] = ['Name', 'InStockAmount', 'Price', 'Image', 'actions'];
  dataSource: MatTableDataSource<IBook>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dataService: DataService) {
    
    this.dataSource = new MatTableDataSource(this.dataService.getBooks());  

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

  handleEditIconClick(id: number) {
    console.log('Button clicked with id:', id);
  }

  handleDeleteIconClick(id: number) {
    console.log('Button clicked with id:', id);
    this.dataService.removeABook(id);
    this.dataSource = new MatTableDataSource(this.dataService.getUpdatedBookIds());

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
