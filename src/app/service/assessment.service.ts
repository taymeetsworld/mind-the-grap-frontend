import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AssessmentService {
  private assessmentUrl = '/api/assessments';
  // endpoint:string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // services go here... create, get, update, delete, errorhandling...

  // Get Assessments
  getAssessments(): Observable<any> {
    return this.http.get(this.assessmentUrl);
  }

  getAssessment(assessment_title): Observable<any> {
    return this.http.get(this.assessmentUrl + "/assessment/" + assessment_title);
  }

  getAssessmentId(assessment_id) {
    return this.http.get(this.assessmentUrl + "/" + assessment_id)
  }

  // editAssessment(assessment_id): Observable<any> {
  //   const url = '/' + assessment_id
  //   console.log()
  //   return this.http.put(this.assessmentUrl + url);
  // }


  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //Get Client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
