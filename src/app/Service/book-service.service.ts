import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = "http://localhost:3000/books";

  constructor(public http: HttpClient) { }

  getData = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
        this.http.get(this.url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
    }

  postBook = (data): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, data)
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
    }

  deleteBook = (id): Promise<Object> => {
    return new Promise ((resolve,reject) => {
      this.http.delete(this.url+'/'+id,id)
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  putBook = (id,data): Promise<Object> => {
    return new Promise ((resolve,reject) => {
      this.http.put(this.url+'/'+id,data)
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
}
