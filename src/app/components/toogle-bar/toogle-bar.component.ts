import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-bar',
  templateUrl: './toogle-bar.component.html',
  styleUrls: ['./toogle-bar.component.css'],
})
export class ToogleBarComponent {
  @Input() isActive: boolean = false;
  @Output() toggleScreen = new EventEmitter<any>();

  toggle(): void {
    this.toggleScreen.emit();
  }
}
