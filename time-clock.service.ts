// Provides services for the time clock(clock in/out, job on/off) only
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// Can be made to catch and report errors, or messages
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './employee';
import { MessageService } from './message.service';
import { AppComponent } from './app.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TimeClockService {

  private trackerapi = 'api/employee';//URL to web api

  constructor(
    private http: HttpClient,
    private messageservice: MessageService
  ) { }

  // Gets employees from the server
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.trackerapi)
      .pipe(tap(_ => this.log('Fetched employees'))
    );
  }

  //Clocks in employee, searches for employee by id
  clockinEmployee (id: number): Observable<Employee> {
    const url = `${this.trackerapi}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`Fetched Employee ${id}`)),
      catchError(this.handleError<any>('Clock in employee'))
    );
  }

  clockoutEmployee (id: number): Observable<Employee> {
    const url = `${this.trackerapi}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`Fetched Employee ${id}`)),
      catchError(this.handleError<any>('Clock out employee'))
    );
  }

  private log(message: string) {
    this.messageservice.add(`TimeClockService: ${message}`);
  }

  //Handles http operatins that failed
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
  };
}

}
