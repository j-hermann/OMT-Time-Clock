import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EMPLOYEES } from '../tempData';

@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {
  //Temp info to test connections
  employees = EMPLOYEES;

  constructor(
    private timeclockService: TimeClockService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // this.getEmployee();
  }
    displayEmployee(): void{
    }
  // getEmployee(): void {
  //   this.timeclockService.getEmployee().subscribe(employees => this.employees = employees);
  // }

}
