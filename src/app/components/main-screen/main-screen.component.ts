import { Component, Input } from '@angular/core';
import { History } from 'src/types';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent {
  @Input() isActive: boolean = false;
  @Input() historyClicked: boolean = false;
  @Input() history: History[] = [];
  @Input() value: string = '';
  @Input() result: string = '';
}
