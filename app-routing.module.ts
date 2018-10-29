import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonboxComponent } from './buttonbox/buttonbox.component';

const routes: Routes = [
  { path: 'buttonbox', component: ButtonboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
