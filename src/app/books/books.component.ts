import { Component, OnInit } from '@angular/core';
import { BookService } from '../Service/book-service.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks = () => {
    this.bookService.getData()
    .then(response =>{
      this.books = response
    })
    .catch(error =>{

    }
    )
  }

  deleteBook = (id) => {

    if(confirm("Are you sure?")) {
    this.bookService.deleteBook(id)
    .then(response => {
      [this.getAllBooks()].splice(0,id);
    })
    .catch(error => {
    })
    }
  }
}
