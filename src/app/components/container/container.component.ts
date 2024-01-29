import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @Input()
  class!: string;
}
