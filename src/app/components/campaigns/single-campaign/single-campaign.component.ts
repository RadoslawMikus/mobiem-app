import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Format } from '../../formats/format-section/format.model';
import { Campaign } from './campaign.model';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrls: ['./single-campaign.component.scss'],
})
export class SingleCampaignComponent implements OnInit {
  activeCampaign: number;

  allArrs = [
    new Campaign(
      1,
      'Biedronka',
      'Świeżaki',
      new Date(2022, 5, 10, 12, 2, 10),
      new Date(2022, 5, 12, 15, 9, 0),
      false,
      true,
      false
    ),
    new Campaign(
      2,
      'Lidl',
      'Lidlaki',
      new Date(2023, 2, 15, 19, 9, 12),
      new Date(2023, 3, 12, 12, 44, 0),
      true,
      false,
      false
    ),
    new Campaign(
      3,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 3, 5, 11, 41, 20),
      new Date(2022, 3, 7, 17, 44, 30),
      false,
      false,
      true
    ),
    new Campaign(
      4,
      'Biedronka',
      'Świeżaki',
      new Date(2022, 5, 10, 12, 2, 10),
      new Date(2022, 5, 12, 15, 9, 0),
      false,
      false,
      true
    ),
    new Campaign(
      5,
      'Lidl',
      'Lidlaki',
      new Date(2023, 2, 15, 19, 9, 12),
      new Date(2023, 3, 12, 12, 44, 0),
      false,
      false,
      true
    ),
    new Campaign(
      6,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 3, 5, 11, 41, 20),
      new Date(2022, 3, 7, 17, 44, 30),
      false,
      false,
      true
    ),
    new Campaign(
      7,
      'Intermarche',
      'Intermarszaki',
      new Date(2021, 12, 10, 16, 2, 10),
      new Date(2021, 12, 12, 12, 9, 0),
      false,
      false,
      false
    ),
    new Campaign(
      8,
      'Castorama',
      'Castoramiaki',
      new Date(2022, 2, 15, 19, 9, 12),
      new Date(2022, 3, 12, 12, 44, 0),
      false,
      false,
      false
    ),
    new Campaign(
      9,
      'Mrówka',
      'Mrówkojadki',
      new Date(2022, 1, 2, 11, 11, 20),
      new Date(2022, 1, 15, 12, 32, 30),
      false,
      false,
      false
    ),
    new Campaign(
      10,
      'Żabka',
      'Żabkojady',
      new Date(2020, 2, 2, 12, 2, 10),
      new Date(2020, 5, 12, 43, 9, 0),
      false,
      false,
      false
    ),
    new Campaign(
      11,
      'Selgros',
      'Selgrosiaki',
      new Date(2019, 2, 15, 19, 9, 12),
      new Date(2019, 3, 12, 12, 44, 0),
      false,
      false,
      false
    ),
    new Campaign(
      12,
      'Kaufland',
      'Kauflandziaki',
      new Date(2023, 7, 15, 14, 41, 20),
      new Date(2022, 9, 17, 17, 21, 30),
      false,
      false,
      false
    ),
    new Campaign(
      13,
      'Mrówka',
      'Mrówkojady',
      new Date(2023, 7, 15, 14, 41, 20),
      new Date(2022, 9, 17, 17, 21, 30),
      false,
      false,
      false
    ),
    new Campaign(
      14,
      'Dino',
      'Diniaki',
      new Date(2023, 7, 15, 14, 41, 20),
      new Date(2022, 9, 17, 17, 21, 30),
      false,
      false,
      false
    ),
  ];
  activeSection = [
    new Format('Fullpage Rich Media', '10.02.2023 - 18.03.2023', 'mobiemapp01'),
    new Format(
      'Notyfikacja graficzna',
      '10.02.2023 - 18.03.2023',
      'URL kreacji 2'
    ),
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.activeCampaign = +id;
    });
  }
}
