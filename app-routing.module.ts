import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonboxComponent } from './buttonbox/buttonbox.component';
import { ClockinComponent } from './clockin/clockin.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';
import { ClockoutComponent } from './clockout/clockout.component';

const routes: Routes = [
  { path: 'buttonbox', component: ButtonboxComponent},
  { path: 'clockin', component: ClockinComponent},
  { path: 'employeeid', component: EmployeeidComponent},
  { path: 'clockout', component: ClockoutComponent}
  //outlet: 'employeeidout' can be used to specifiy outlets
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
