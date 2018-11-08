import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {
  @Input() employee: Employee;
  @Output() employeeidInput = new EventEmitter<number>();
  employees: Employee[];
  selectEmployee: Employee;
  idfromInput: string;
  idnumberbox: string = "";

  constructor(
    private timeclockService: TimeClockService,
    private route: ActivatedRoute,
    private location: Location,
    private messageservice: MessageService
  ) { }

  ngOnInit() {

  }

  //Allows for date and time to be displayed using the built in time pipe
  today: number = Date.now();

  // This function allows for employeeid's input values to be read by a parent component
  onEnter(id: number): void{
    this.employeeidInput.emit(id);
    this.idnumberbox = "";
  }

  // This should change the value displayed in the box when a key is pressed
  keypadValue(value: number): void{
    this.idnumberbox = this.idnumberbox + value;
    this.log(`${value} was recived`);
  }

  //Log for testing purposes
  private log(message: string) {
    this.messageservice.add(`EmployeeId: ${message}`);
  }

  //None of these functions are called, left for reference, remove when redoing code
  // //Gets all employees
  // getEmployees(): void{
  //   this.timeclockService.getEmployees()
  //     .subscribe(employees => this.employees = employees);
  // }
  //
  // // Find employee by id
  // clockin(id: number): void {
  //   this.timeclockService.clockinEmployee(id).subscribe(employee => this.employee = employee);
  // }
}
