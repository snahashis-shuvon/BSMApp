import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsFormComponent } from "./book-details-form/book-details-form.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomePageComponent, ReactiveFormsModule, BookDetailsFormComponent, RouterModule, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'BSMApp';
}
