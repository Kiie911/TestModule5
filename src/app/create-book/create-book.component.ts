import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookService } from '../Service/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  createBookForm: FormGroup;

  constructor(private bookService: BookService, private fb:FormBuilder) { }


  ngOnInit(): void {
    this.createBookForm = this.fb.group({
      title: '',
      author: '',
      description: ''
    })
  }



  postBook() {
    let data = this.createBookForm.value;
    this.bookService.postBook(data)
    .then(response => {
      console.log('Thêm thành công');
    })
    .catch(error => {
    });
  }

}
