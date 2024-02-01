import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HTTP_CONFIG, HttpConfig } from '../../config/httpclient.config';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, @Inject(HTTP_CONFIG) private httpConfig: HttpConfig) {

  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpConfig.withBase("/users"), { headers: this.httpConfig.defaultHeaders }).pipe(catchError(this.handleError))
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.httpConfig.withBase(`/users/${id}`), { headers: this.httpConfig.defaultHeaders }).pipe(catchError(this.handleError));
  }

  private handleError(error: Error) {
    return throwError(() => new Error("An error occurred, please try again"));
  }
}
