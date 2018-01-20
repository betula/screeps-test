import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersStream(): Observable<Object[]> {
    const url = `${environment.serverUrl}/users`;
    return this.http.get<Object[]>(url);
  }

  getUserStream(id): Observable<Object> {
    const url = `${environment.serverUrl}/user/${id}`;
    return this.http.get(url);
  }

}
