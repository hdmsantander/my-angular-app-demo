import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Angular Demo | User');
  }

  ngOnInit(): void {}
}
