import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { getUserImage } from '../../../images.data';

@Component({
  selector: 'app-user-details-card',
  standalone: true,
  imports: [],
  templateUrl: './user-details-card.component.html',
  styleUrl: './user-details-card.component.css'
})
export class UserDetailsCardComponent implements OnInit {

  @Input({ required: true })
  user!: User;

  userImage!: string;

  ngOnInit() {
    this.userImage = getUserImage(this.user.id);
  }
}
