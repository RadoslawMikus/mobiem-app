import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  iframe_url: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let url = params.get('url');
      this.iframe_url = url;
    });
  }

  getUrl(url: string) {
    return 'https://lpmobiem.civ.pl/' + url;
  }
}
