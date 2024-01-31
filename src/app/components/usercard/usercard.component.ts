import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { RouterLink } from '@angular/router';
import { getUserImage } from '../../../images.data';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  @Input({ required: true })
  user!: User;

  getImage(userId: number) {
    return getUserImage(userId);
  }
}
