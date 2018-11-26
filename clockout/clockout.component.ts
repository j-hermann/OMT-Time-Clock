// This component should act as a controller, to sequence the components needed to complete a clock out
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee';
import { TimeClockService } from '../time-clock.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-clockout',
  templateUrl: './clockout.component.html',
  styleUrls: ['./clockout.component.css']
})
export class ClockoutComponent implements OnInit {

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
    this.clockout(136)
  }
  // Uses a pipe to display current time, this needs to be made to actaully progress with time.
  today: number = Date.now();

  clockout(id: number): void {
    this.timeclockService.clockoutEmployee(id).subscribe(employee => this.employee = employee);
  }
}
