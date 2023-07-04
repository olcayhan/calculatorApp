import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  @Output() getHistory = new EventEmitter<any>();
  @Input() isActive: boolean = false;

  getHist() {
    this.getHistory.emit();
  }
}
