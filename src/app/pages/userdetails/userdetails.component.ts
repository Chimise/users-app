import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { ContainerComponent } from '../../components/container/container.component';
import { UserDetailsCardComponent } from '../../components/user-details-card/user-details-card.component';
import { UserCardPaperComponent } from '../../components/user-card-paper/user-card-paper.component';
import { UserCompanyCardComponent } from '../../components/user-company-card/user-company-card.component';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [ContainerComponent, UserDetailsCardComponent, UserCardPaperComponent, UserCompanyCardComponent],
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
    console.log("id", this.id);
    this.subscription = this.userService.getUserById(this.id).subscribe({
      next: (user) => this.user = user,
      error: () => this.error = "An error occurred, please try again",
      complete: () => this.loading = false
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
