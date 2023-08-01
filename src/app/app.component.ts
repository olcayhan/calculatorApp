import { Component } from '@angular/core';
import { History } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';
  historyClicked: boolean = false;
  storedValue: string | null = localStorage.getItem('mode');
  isActive: boolean = this.storedValue ? JSON.parse(this.storedValue) : false;
  result: string = '';
  value: string = '0';
  calculated: boolean = false;
  stored: string | null = localStorage.getItem('history');
  history: History[] = this.stored ? JSON.parse(this.stored) : [];

  toggleScreen(): void {
    this.isActive = !this.isActive;
    localStorage.setItem('mode', String(this.isActive));
  }

  loadCalculate(data: string): void {
    if (this.calculated) {
      this.clearFunc();
      this.calculated = false;
    }

    if (
      !Number(this.value[this.value.length - 1]) &&
      (data === '/' || data === '*' || data == '-' || data == '+')
    )
      return;

    if (this.value === '0') {
      this.value = data;
      return;
    }
    this.value = this.value + data;
  }

  calculateFunc(): void {
    if (
      this.result === undefined ||
      !Number(this.value[this.value.length - 1])
    ) {
      this.result = 'Error';
      this.value = '0';
      return;
    }
    this.result = eval(this.value);
    this.setHistory(this.value, this.result);
  }

  setHistory(value: string, result: string) {
    this.calculated = true;
    this.history.push({ value, result });
    if (this.history.length > 3) this.history = this.history.slice(1);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  getHistory() {
    this.historyClicked = !this.historyClicked;
  }

  calculatePercentage() {
    this.result = String(eval(this.value) / 100);
    this.setHistory(this.value, this.result);
  }

  changePrefix() {
    if (Number(this.value) && Number(this.value) > 0) {
      this.value = '-' + this.value;
    } else if (Number(this.value) < 0) {
      this.value = this.value.slice(1);
    }
  }

  clearFunc() {
    this.value = '0';
    this.result = '';
  }
}
