import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, mergeMap, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  DEFAULT_MAX_RETRIES = 5;
  DEFAULT_BACKOFF = 1000;
  urlBase = ''
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  getHeaders() {
    return new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  updateOptions(options: any) {
    // TODO
  }
  getOptions(params: any = {}) {
    return { headers: this.getHeaders(), params: params }
  }
  put<T>(url: string, payload: object, options: object = {}) {
    return this.http.put<T>(url, payload, options).pipe(catchError(this.handleError<any>('')));
  }
  post<T>(url: string, payload: object, options: object = {}) {
    return this.http.post<T>(url, payload, options).pipe(catchError(this.handleError<any>('')));
  }
  get<T>(url: string, option: object = {}) {
    return this.http.get<T>(url, option).pipe(retry(1), catchError(this.handleError<any>('')));
  }
  delete<T>(url: string, option: object = {}) {
    return this.http.delete<T>(url, option).pipe(retry(3), catchError(this.handleError<any>('')));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status == 401) {
        console.log('am suppose to logout')
        this.router.navigateByUrl('/login')
      }
      if (error.status == 500) {
        console.log('theres an issue here')
      }
      return of(error);
    }
  }
  getErrorMessage(maxRetry: number) {
    return `Tried to load Resource over XHR for ${maxRetry} times without success. Giving up`;
  }
}