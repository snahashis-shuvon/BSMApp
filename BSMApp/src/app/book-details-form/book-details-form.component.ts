import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../Models/IBook';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-book-details-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './book-details-form.component.html',
  styleUrl: './book-details-form.component.css'
})
export class BookDetailsFormComponent implements OnInit {
  bookForm!: FormGroup;
  selectedId = 0;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      Name: ['', Validators.required],
      InStockAmount: ['', Validators.required],
      Price: ['', Validators.required],
      Image: ['', Validators.required]
    });


    const id = this.route.snapshot.paramMap.get('id?')!;

    if (id === null) {
      const bookModel = {
        Name: '',
        InStockAmount: 0,
        Price: 0,
        Image: ''
      };
      this.bookForm.patchValue(bookModel);
    } else {
      const book = this.dataService.getBookById(parseInt(id) - 1);

      this.bookForm.patchValue(book);
    }

  }

  onSubmit() {
    // Handle form submission here
    if (this.bookForm.valid) {
      const formData: IBook = this.bookForm.value;
      console.log('Form submitted:', formData);
      // Perform further actions, such as sending data to backend
    } else {
      // Form is invalid
      console.log('Form is invalid');
    }
  }
}
