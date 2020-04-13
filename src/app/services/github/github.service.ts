import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
    // tslint:disable-next-line: no-inferrable-types
    url: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('${this.url}');
  }
  getUser(username: string): Observable<any> {
    return this.http.get('${this.url}/${username}');
  }
}
