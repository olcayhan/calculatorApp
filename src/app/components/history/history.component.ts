import { Component, EventEmitter, Input, Output } from '@angular/core';
import { History } from 'src/types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Output() getHistory = new EventEmitter<History>();
  @Input() isActive: boolean = false;
}
