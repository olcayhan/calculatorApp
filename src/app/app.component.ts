import { Component } from '@angular/core';
import { History } from 'src/types';
import { evaluateExpression } from '../utils/eval';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';
  historyClicked: boolean = false;
  isActive: boolean = false;
  result: number | string = '';
  value: string = '0';
  calculated: boolean = false;
  stored: string | null = localStorage.getItem('history');
  history: History[] = this.stored ? JSON.parse(this.stored) : [];
  currentTheme: Theme = Theme.Light;

  toggleScreen(): void {
    this.isActive = !this.isActive;
    this.currentTheme = this.isActive ? Theme.Dark : Theme.Light;
    this.setTheme(this.currentTheme);
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  loadCalculate(input: string): void {
    if (this.calculated) {
      this.clearFunc();
      this.calculated = false;
    }

    const lastCharacter = this.value[this.value.length - 1];

    if (isNaN(Number(lastCharacter)) && ['*', '-', '+', '/'].includes(input)) {
      this.value = this.value.slice(0, -1);
    }

    if (this.value === '0' && (!isNaN(Number(input)) || input === '00')) {
      input = input === '00' ? '0' : input;
      this.value = input;
      return;
    }
    this.value += input;
  }

  handleError(): void {
    this.result = 'Error';
    this.value = '0';
  }

  calculateFunc(): void {
    const lastCharacter = this.value[this.value.length - 1];

    if (this.result === undefined || isNaN(Number(lastCharacter))) {
      this.handleError();
      return;
    }

    try {
      this.result = evaluateExpression(this.value);
      this.setHistory(this.value, this.result);
    } catch (error) {
      this.handleError();
    }
  }

  setHistory(value: string, result: number) {
    this.calculated = true;
    this.history.push({ value, result });
    if (this.history.length > 3) {
      this.history = this.history.slice(1);
    }
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  getHistory() {
    this.historyClicked = !this.historyClicked;
  }

  calculatePercentage() {
    this.result = evaluateExpression(this.value) / 100;
    this.setHistory(this.value, this.result);
  }

  changePrefix() {
    if (
      !isNaN(Number(this.value)) &&
      Number(this.value) >= 0 &&
      this.value[0] !== '-'
    ) {
      this.value = '-' + this.value;
    } else if (Number(this.value) < 0 || this.value[0] === '-') {
      this.value = this.value.slice(1);
    }
  }

  clearFunc() {
    this.value = '0';
    this.result = '';
  }
}
