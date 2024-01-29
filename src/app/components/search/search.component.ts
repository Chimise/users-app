import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Input({ required: true })
  search!: string;

  @Output()
  searchChange: EventEmitter<string> = new EventEmitter();

  handleChange(value: string) {
    this.searchChange.emit(value);
  }

}
