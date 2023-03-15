import { Component } from '@angular/core';
import { Campaign } from './single-campaign/campaign.model';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent {
  current = [
    new Campaign(
      1,
      'Biedronka',
      'Świeżaki',
      new Date(2022, 5, 10, 12, 2, 10),
      new Date(2022, 5, 12, 15, 9, 0),
      true
    ),
    new Campaign(
      2,
      'Lidl',
      'Lidlaki',
      new Date(2023, 2, 15, 19, 9, 12),
      new Date(2023, 3, 12, 12, 44, 0),
      true
    ),
    new Campaign(
      3,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 3, 5, 11, 41, 20),
      new Date(2022, 3, 7, 17, 44, 30),
      false
    ),
    new Campaign(
      4,
      'Biedronka',
      'Świeżaki',
      new Date(2022, 5, 10, 12, 2, 10),
      new Date(2022, 5, 12, 15, 9, 0),
      false
    ),
    new Campaign(
      5,
      'Lidl',
      'Lidlaki',
      new Date(2023, 2, 15, 19, 9, 12),
      new Date(2023, 3, 12, 12, 44, 0),
      false
    ),
    new Campaign(
      6,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 3, 5, 11, 41, 20),
      new Date(2022, 3, 7, 17, 44, 30),
      false
    ),
  ];

  old = [
    new Campaign(
      7,
      'Intermarche',
      'Intermarszaki',
      new Date(2021, 12, 10, 16, 2, 10),
      new Date(2021, 12, 12, 12, 9, 0),
      false
    ),
    new Campaign(
      8,
      'Castorama',
      'Castoramiaki',
      new Date(2022, 2, 15, 19, 9, 12),
      new Date(2022, 3, 12, 12, 44, 0),
      false
    ),
    new Campaign(
      9,
      'Mrówka',
      'Mrówkojadki',
      new Date(2022, 1, 2, 11, 11, 20),
      new Date(2022, 1, 15, 12, 32, 30),
      false
    ),
    new Campaign(
      10,
      'Żabka',
      'Żabkojady',
      new Date(2020, 2, 2, 12, 2, 10),
      new Date(2020, 5, 12, 43, 9, 0),
      false
    ),
    new Campaign(
      11,
      'Selgros',
      'Selgrosiaki',
      new Date(2019, 2, 15, 19, 9, 12),
      new Date(2019, 3, 12, 12, 44, 0),
      false
    ),
    new Campaign(
      12,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 7, 15, 14, 41, 20),
      new Date(2022, 9, 17, 17, 21, 30),
      false
    ),
  ];

  constructor() {}
}
