import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Student } from '../models/student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'http://apistringcleasing-itechagencia-tech.umbler.net';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  chekin(item): Observable<any> {
    return this.http
      .post(this.base_path + '/registraponto', this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  logado(){
    let key = localStorage.getItem('clickCounter');;
    if(key == ""){
      key = 'false'    
    }else{
    key = 'true';
    }
    return key;
  }

  login(item) {
    return this.http
      .post<any>(this.base_path + '/api/auth/logar', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  usuario() {
    return this.http
      .get<any>(this.base_path, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  




}
