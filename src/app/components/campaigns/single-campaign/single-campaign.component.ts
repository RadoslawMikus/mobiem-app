import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Format } from '../../formats/format-section/format.model';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrls: ['./single-campaign.component.scss'],
})
export class SingleCampaignComponent implements OnInit {
  result: any;
  activeSection = [
    new Format('Tytuł kreacji nr 1', 'Opis kreacji 1', 'mobiemapp01'),
    new Format('Tytuł kreacji nr 2', 'Opis kreacji 2', 'URL kreacji 2'),
    new Format('Tytuł kreacji nr 3', 'Opis kreacji 3', 'URL kreacji 3'),
  ];
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      console.log(id);
      this.showCampaign(id);
    });
  }

  showCampaign(id: number) {
    this.result = id;
  }
}
