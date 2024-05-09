import { Routes} from '@angular/router';
import { BookDetailsFormComponent } from './book-details-form/book-details-form.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Home-Page', component: HomePageComponent},
    {path: 'Book-Details-Form/:id?', component: BookDetailsFormComponent}
];
