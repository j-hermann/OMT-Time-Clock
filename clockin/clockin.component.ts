// This component should act as a controller, to sequence the components needed to complete a clock in
import { Component, OnInit } from '@angular/core';
import { EmployeeidComponent } from '../employeeid/employeeid.component';


@Component({
  selector: 'app-clockin',
  templateUrl: './clockin.component.html',
  styleUrls: ['./clockin.component.css']
})
export class ClockinComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
