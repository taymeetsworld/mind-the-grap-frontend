import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
 
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private resultUrl = '/api/results';

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }
  // Get results based on User ID and Assessment ID

  getResults(): Observable<any> {
    return this.http.get(this.resultUrl);
  }
}