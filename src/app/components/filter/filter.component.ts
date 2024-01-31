import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FilterProps {
  checked: boolean;
  name: string;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  @Input({ required: true })
  checked!: boolean;

  @Input()
  isLast: boolean = false;

  @Output()
  checkedChange: EventEmitter<FilterProps> = new EventEmitter();

  @Input({ required: true })
  name!: string;

  handleChange(event: Event) {
    const elem = event.target as HTMLInputElement;
    const checked = elem.checked;
    this.checkedChange.emit({ checked, name: this.name });
  }
}
