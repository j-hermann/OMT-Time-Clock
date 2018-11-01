import { Component, OnInit, Input } from '@angular/core';
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
    this.getEmployees();
  }
  // Test method for message service
  onEnter(): void{
    this.messageservice.add('Reaganomics Lamborghini clocked in at')
  }

  //Gets all employees
  getEmployees(): void{
    this.timeclockService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  // Find employee by id
  getEmployee(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.timeclockService.getEmployee(id).subscribe(employee => this.employee = employee);
  }

  clockin(employee: Employee): void {
    this.timeclockService.clockinEmployee(employee).subscribe();
}
}
