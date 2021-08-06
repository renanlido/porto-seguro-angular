/* eslint-disable no-useless-constructor */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { responseData } from 'src/app/_model/responseData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly api =
    'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital';

  constructor(private http: HttpClient) {}

  getAllHospitals(): Observable<responseData[]> {
    return this.http.get<responseData[]>(this.api).pipe(tap(console.log));
  }
}
