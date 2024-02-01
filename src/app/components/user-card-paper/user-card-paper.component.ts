import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-paper',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user-card-paper.component.html',
  styleUrl: './user-card-paper.component.css'
})
export class UserCardPaperComponent {
  @Input()
  class: string = ""
}
