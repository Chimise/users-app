import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learning-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './learning-card.component.html',
  styleUrl: './learning-card.component.css'
})
export class LearningCardComponent {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  description!: string;

  @Input()
  isActive: boolean = false;
}
