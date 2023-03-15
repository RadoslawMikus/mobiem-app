import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-campaign',
  templateUrl: './single-campaign.component.html',
  styleUrls: ['./single-campaign.component.scss'],
})
export class SingleCampaignComponent implements OnInit {
  result: any;
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
