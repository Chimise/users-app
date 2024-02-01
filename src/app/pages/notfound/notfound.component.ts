import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
