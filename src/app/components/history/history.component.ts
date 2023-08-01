import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Output() getHistory = new EventEmitter<any>();
  @Input() isActive: boolean = false;
}
