import { Component, Input } from '@angular/core';
import { UserCardPaperComponent } from '../user-card-paper/user-card-paper.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-company-card',
  standalone: true,
  imports: [UserCardPaperComponent],
  templateUrl: './user-company-card.component.html',
  styleUrl: './user-company-card.component.css'
})
export class UserCompanyCardComponent {
  @Input({ required: true })
  user!: User;

}
