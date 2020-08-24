import { Component, OnInit } from '@angular/core';
import { BookService } from '../Service/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  book: any;

  bookId = +this.activateRouter.snapshot.paramMap.get('id');

  constructor(private bookService: BookService,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getBookById(this.bookId).subscribe(res =>{
      this.book=res
      console.log(this.book)
    })
  }

}
