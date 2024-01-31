import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  id!: string;
  loading: boolean = true;
  error: string | null = null;
  subscription!: Subscription;
  user!: User;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.subscription = this.userService.getUserById(this.id).subscribe((user) => this.user = user, (error) => this.error = "An error occurred, please try again", () => this.loading = true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
