import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{
  @Input() targetValue: number = 0;
  counter: number = 0;

  ngOnInit(): void {
    this.startCounter(this.targetValue);
  }

  startCounter(value: number): void {
    const increment = value / 200;
    const interval = setInterval(() => {
      this.counter += increment;
      if (this.counter >= value) {
        this.counter = value;
        clearInterval(interval);
      }
    }, 5);
  }
}
