import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookService } from '../Service/book-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;
  //lấy idProduct từ link
  bookId = +this.activateRouter.snapshot.paramMap.get('id');


  constructor(private bookService: BookService,
    private activateRouter: ActivatedRoute,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.editBookForm = new FormGroup(
      {
        id: new FormControl(this.bookId),
        title: new FormControl(),
        author: new FormControl(),
        description: new FormControl()
      })

      this.bookService.getBookById(this.bookId).subscribe(res => {
        this.editBookForm.patchValue(res);
      })

  }

  putBook() {
    let data = this.editBookForm.value;
    this.bookService.putBook(this.bookId,data)
    .then(response => {
      console.log('Sửa thành công');
    })
    .catch(error => {
    });
  }
}
