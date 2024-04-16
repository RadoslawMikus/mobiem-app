import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  iframe_url: string;
  topX: number;
  topY: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let url = params.get('url');
      this.iframe_url = url;
    });
    document.getElementById('close').style.opacity = '1';
    this.uploadDone();
  }

  getUrl(url: string) {
    return 'https://lpmobiem.civ.pl/' + url;
  }

  closeIframe() {
    history.back();
  }

  uploadDone() {
    window.addEventListener(
      'message',
      (e) => {
        this.topY =
          (window.innerHeight - parseFloat(e.data.aspectHeight)) / 2 + 10;
        this.topX =
          (window.innerWidth - parseFloat(e.data.aspectWidth)) / 2 + 10;
      },
      false
    );
  }
}
