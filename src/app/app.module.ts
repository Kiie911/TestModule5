import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BookInfoComponent } from './book-info/book-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateBookComponent,
    EditBookComponent,
    BookInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
