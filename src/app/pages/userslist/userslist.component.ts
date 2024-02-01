import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SearchComponent } from '../../components/search/search.component';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UsercardComponent } from '../../components/usercard/usercard.component';
import { UsercardskeletonComponent } from '../../components/usercardskeleton/usercardskeleton.component';
import { Search } from '../../models/search.model';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [ContainerComponent, SearchComponent, UsercardComponent, UsercardskeletonComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit, OnDestroy {
  users!: User[];
  loading: boolean = true;
  error: string | null = null;
  searchValue = "";
  subscriber!: Subscription;
  searchFilters: string[] = ["name"];
  placeholders: number[] = Array.from({ length: 6 }, (i: number) => i + 1);

  constructor(private userService: UserService) {

  }

  handleSearchChange(search: Search) {
    this.searchValue = search.value;
    this.searchFilters = search.filters;
  }

  filterUsers(): User[] {
    const filteredUsers: User[] = [];

    for (const user of this.users) {
      let isMatch = false;

      for (const filter of this.searchFilters) {
        const userInfo = user[filter as 'email' | 'address' | 'name' | 'username'];

        if (typeof userInfo === 'object') {
          isMatch = userInfo.city.toLowerCase().includes(this.searchValue.toLowerCase());
        } else {
          isMatch = userInfo.toLowerCase().includes(this.searchValue.toLowerCase());
        }

        if (isMatch) {
          break;
        }
      }

      if (isMatch) {
        filteredUsers.push(user);
      }
    }

    return filteredUsers;
  }

  ngOnInit(): void {
    this.subscriber = this.userService.getAllUsers().subscribe({
      next: (users) => this.users = users,
      error: () => this.error = "An error an occurred, please try again",
      complete: () => this.loading = false
    })
  }



  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
