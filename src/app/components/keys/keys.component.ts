import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css'],
})
export class KeysComponent {
  @Input() isActive: boolean = false;
  @Output() clearFunc = new EventEmitter<any>();
  @Output() changePrefix = new EventEmitter<any>();
  @Output() calculatePercentage = new EventEmitter<any>();
  @Output() loadCalculate = new EventEmitter<any>();
  @Output() calculateFunc = new EventEmitter<any>();
}
