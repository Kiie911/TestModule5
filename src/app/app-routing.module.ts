import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from'./edit-book/edit-book.component';
import { BookInfoComponent } from './book-info/book-info.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'info/:id',
    component: BookInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
