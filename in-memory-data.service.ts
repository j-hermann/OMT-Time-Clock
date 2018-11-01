import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employee = [
      { id: 113, name: 'Reaganomics Lamborghini', active: true, clockedIN: false },
      { id: 124, name: 'John Deer', active: false, clockedIN: false },
      { id: 125, name: 'Roy Rogers McFreely', active: true, clockedIN: false },
      { id: 136, name: 'Arthur Temple', active: false, clockedIN: false },
    ];
    return {employee};
  }
}
