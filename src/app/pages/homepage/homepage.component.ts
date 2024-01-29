import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
