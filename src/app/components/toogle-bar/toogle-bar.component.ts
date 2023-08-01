import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-bar',
  templateUrl: './toogle-bar.component.html',
  styleUrls: ['./toogle-bar.component.scss'],
})
export class ToogleBarComponent {
  @Input() isActive: boolean = false;
  @Output() toggleScreen = new EventEmitter<any>();
}
