import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { LearningCardComponent } from '../../components/learning-card/learning-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContainerComponent, LearningCardComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
