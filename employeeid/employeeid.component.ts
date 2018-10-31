import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EMPLOYEESMOCK } from '../tempData';

@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {
  //Temp info to test connections
  employees = EMPLOYEESMOCK;
  selectEmployee: Employee;
  idfromInput: string;

  onEnter(term: string): void{
    this.idfromInput = term;
  }

  constructor(
    private timeclockService: TimeClockService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.getEmployee();
  }

  // getEmployee(): void {
  //   this.timeclockService.getEmployee().subscribe(employees => this.employees = employees);
  // }

}
