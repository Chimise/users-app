import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../models/filter.model';


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
  checkedChange: EventEmitter<Filter> = new EventEmitter();

  @Input({ required: true })
  name!: string;

  handleChange(event: Event) {
    const elem = event.target as HTMLInputElement;
    const checked = elem.checked;
    this.checkedChange.emit({ checked, name: this.name });
  }
}
