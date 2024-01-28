import { Routes } from '@angular/router';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [{
    path: "users/:id",
    component: UserdetailsComponent
}, {
    path: "users",
    component: UserslistComponent
}, {
    path: "",
    redirectTo: "/users",
    pathMatch: 'full'
}, {
    path: "**",
    component: NotfoundComponent
}];
