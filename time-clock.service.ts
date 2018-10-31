// Provides services for the time clock(clock in/out, job on/off) only
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Can be made to catch and report errors, or messages
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './employee';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TimeClockService {

  private trackerapi = 'api/tracker';//URL to web api

  constructor(
    private http: HttpClient,
    private messageservice: MessageService
  ) { }

  // Retrives employees from the server
  // getEmployees(): Observable<Employee[]>{
  //   return this.http.get<Employee[]>(this.trackerapi)
  //   .pipe(
  //     tap(employees => this.log('fetched heroes'))
  //   )
  //}
  getEmployee(id: number): Observable<Employee> {
    const url = '${this.trackerapi}/${id}';
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log('fetched hero id=${id}'))
    )
  }

}
