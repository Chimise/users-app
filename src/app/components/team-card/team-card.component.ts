import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input({required: true})
  imageUrl!: string;

  @Input({required: true})
  name!: string;

  @Input({required: true})
  githubLink!: string;
}
