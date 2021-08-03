import { Component, OnInit } from '@angular/core';
import { DashboardCardsConfig } from './dashboard.config';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardsConfig = DashboardCardsConfig;

  constructor() {}

  ngOnInit(): void {}
}
