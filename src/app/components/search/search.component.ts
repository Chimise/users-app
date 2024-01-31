import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterProps, FilterComponent } from '../filter/filter.component';

export interface Search {
  value: string;
  filters: string[]
}
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgClass, FilterComponent, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  isMenuVisible: boolean = false;

  filters: FilterProps[] = [{ name: "name", checked: true }, { name: "email", checked: false }, { name: "username", checked: false }, { name: "address", checked: false }]

  @Input({ required: true })
  search!: string;

  @Output()
  searchChange: EventEmitter<Search> = new EventEmitter();

  handleChange(value: string) {
    const filters = this.getActiveFilters();
    this.searchChange.emit({ value, filters });
  }

  handleFilterChange(newFilter: FilterProps) {
    this.filters = this.filters.map(filter => {
      if (filter.name === newFilter.name) {
        return newFilter;
      }
      return filter;
    })

    const activeFilters = this.getActiveFilters();
    this.searchChange.emit({ value: this.search, filters: activeFilters });
  }

  handleVisibilityToggle() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  trackByFn(index: number, filter: FilterProps) {
    return filter.name;
  }

  private getActiveFilters() {
    const filters: string[] = [];

    for (const filter of this.filters) {
      if (filter.checked) {
        filters.push(filter.name);
      }
    }

    if (filters.length == 0) {
      filters.push("name");
    }

    return filters;
  }

}
