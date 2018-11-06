import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-numberpad',
  templateUrl: './numberpad.component.html',
  styleUrls: ['./numberpad.component.css']
})
export class NumberpadComponent implements OnInit {
  @Output() numberpadInput = new EventEmitter<number>();

  constructor(
    private messageservice: MessageService
  ) { }

  ngOnInit() {
  }

  onPress(key: number): void{
    this.numberpadInput.emit(key);
    this.log(`${key} has been pressed`)
  }

  // Temporary log method to allow for component testing
  private log(message: string) {
    this.messageservice.add(`${message}`);
  }

}
