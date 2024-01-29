import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SearchComponent } from '../../components/search/search.component';
import { UserService } from '../../services/user/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UsercardComponent } from '../../components/usercard/usercard.component';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [ContainerComponent, SearchComponent, UsercardComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit, OnDestroy {
  users!: User[];
  loading: boolean = true;
  error: string | null = null;
  searchValue = "";
  subscriber!: Subscription;

  constructor(private userService: UserService) {

  }

  filterUsers(): User[] {
    return this.users.filter(user => user.name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }

  ngOnInit(): void {
    this.subscriber = this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      () => {
        this.error = "An error an occurred, please try again";
      },
      () => {
        this.loading = false;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
