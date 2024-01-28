import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  id!: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
  }
}
