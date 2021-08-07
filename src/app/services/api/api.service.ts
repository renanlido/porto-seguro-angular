/* eslint-disable no-useless-constructor */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { responseData } from 'src/app/_model/responseData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly api = environment.api;

  constructor(private http: HttpClient) {}

  getAllHospitals(): Observable<responseData[]> {
    return this.http.get<responseData[]>(this.api).pipe(tap(console.log));
  }

  post(data: responseData) {
    try {
      this.http
        .post(this.api, JSON.stringify(data))
        .pipe(tap(res => res))
        .subscribe(dados => console.log(dados));

      return true;
    } catch (error) {
      return error;
    }
  }
}
