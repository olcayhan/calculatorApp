import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss'],
})
export class KeysComponent {
  @Input() isActive: boolean = false;
  @Output() clearFunc = new EventEmitter<void>();
  @Output() changePrefix = new EventEmitter<void>();
  @Output() calculatePercentage = new EventEmitter<void>();
  @Output() loadCalculate = new EventEmitter<string>();
  @Output() calculateFunc = new EventEmitter<void>();

  keypadRows: { label: string }[][] = [
    [{ label: 'AC' }, { label: '+/-' }, { label: '%' }],
    [{ label: '1' }, { label: '2' }, { label: '3' }],
    [{ label: '4' }, { label: '5' }, { label: '6' }],
    [{ label: '7' }, { label: '8' }, { label: '9' }],
    [{ label: '.' }, { label: '0' }, { label: '00' }],
  ];

  onButtonClick(buttonLabel: string): void {
    switch (buttonLabel) {
      case 'AC':
        this.clearFunc.emit();
        break;
      case '+/-':
        this.changePrefix.emit();
        break;
      case '%':
        this.calculatePercentage.emit();
        break;
      default:
        this.loadCalculate.emit(buttonLabel);
        break;
    }
  }
}
