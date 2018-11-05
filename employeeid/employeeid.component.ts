import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

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

  constructor(
    private timeclockService: TimeClockService,
    private route: ActivatedRoute,
    private location: Location,
    private messageservice: MessageService
  ) { }

  ngOnInit() {
    // this.getEmployees();
  }

  today: number = Date.now();
  // This function allows for employeeid's input values to be read by a parent component
  onEnter(id: number): void{
    this.employeeidInput.emit(id);
  }
  //None of these functions are called left for reference, remove when redoing code
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
