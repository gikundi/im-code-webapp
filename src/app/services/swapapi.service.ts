
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs/index';

// Set HTTP Headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SwapapiService {

  constructor(private http: HttpClient) {
  }

  // Base URL
  baseUrl = 'https://swapi.co/api/people/';

  // Fetch a List of StarWar Characters
  getStarWarCharacters() {
    return this.http.get(this.baseUrl)
  .pipe(
      catchError(this.handleError)
    );
  }

 // Fetch Starwar Characters Details
  getStarWarCharactersDetails(id: number) {
    return this.http.get(this.baseUrl + id)
      .pipe(
        catchError(this.handleError)
      );
  }
  // Method to handle error
  private handleError(error: HttpErrorResponse) {
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
  }

}
