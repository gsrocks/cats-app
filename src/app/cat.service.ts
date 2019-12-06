import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat } from './cat';
import { CATS } from './mock-cats';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CatService {

  constructor(
  private http: HttpClient,
  ) { }

  getCats (): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.catsUrl)
      .pipe(
        catchError(this.handleError<Cat[]>('getCats', []))
      );
  }

  getCat(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/${id}`;
    return this.http.get<Cat>(url).pipe(
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    );
  }

  updateCat (cat: Cat): Observable<any> {
    return this.http.put(this.catsUrl, cat, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCat'))
    );
  }
  addCat (cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.catsUrl, cat, this.httpOptions).pipe(
      catchError(this.handleError<Cat>('addCat'))
    );
  }

  deleteCat (cat: Cat | number): Observable<Cat> {
    const id = typeof cat === 'number' ? cat : cat.id;
    const url = `${this.catsUrl}/${id}`;
    return this.http.delete<Cat>(url, this.httpOptions).pipe(
      catchError(this.handleError<Cat>('deleteCat'))
    );
  }

  private  catsUrl = 'api/cats';
  /**
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
