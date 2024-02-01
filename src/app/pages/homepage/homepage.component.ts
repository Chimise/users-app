import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { LearningCardComponent } from '../../components/learning-card/learning-card.component';
import { RouterLink } from '@angular/router';
import { Team } from '../../models/team.model';
import { TeamCardComponent } from '../../components/team-card/team-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContainerComponent, LearningCardComponent, RouterLink, TeamCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  teams: Team[] = [{name: "Nnakude Chisom", githubLink: "https://github.com/chimise", imageUrl: "/assets/team/chisom.jpeg"}, {name: "Charles Lughas", githubLink: "https://github.com/lordlughas", imageUrl: "/assets/team/Charles-lughas.jpg"}, {name: "Charles Adah", githubLink: "https://github.com/charlesadah123", imageUrl: "/assets/team/charles-adah.jpg"}, {name: "Chidinma Loveth Anoliefo", githubLink: "https://github.com/nmaloveth", imageUrl: "/assets/team/loveth.jpg"}, {name: "Benedict I. Odoh", githubLink: "https://github.com/benedict-ik", imageUrl: "/assets/team/benedict.jpeg"}, {name: "Favour Numonde", githubLink: "https://github.com/kurofavo", imageUrl: "/assets/team/favour.jpeg"} ]
}
