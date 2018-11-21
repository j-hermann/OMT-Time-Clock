// This component should act as a controller, to sequence the components needed to complete a clock in
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-clockin',
  templateUrl: './clockin.component.html',
  styleUrls: ['./clockin.component.css']
})
export class ClockinComponent implements OnInit {

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
    this.clockin(136)
  }
  // Uses a pipe to display current time, this needs to be made to actaully progress with time.
  today: number = Date.now();

  clockin(id: number): void {
    this.timeclockService.clockinEmployee(id).subscribe(employee => this.employee = employee);
  }
}
