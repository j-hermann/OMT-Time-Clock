import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employee = [
      { id: 113, name: 'Reaganomics Lamborghini', active: true },
      { id: 124, name: 'John Deer', active: false },
    ];
    return {employee};
  }
}
