import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Format } from './format.model';

@Component({
  selector: 'app-format-section',
  templateUrl: './format-section.component.html',
  styleUrls: ['./format-section.component.scss'],
})
export class FormatSectionComponent implements OnInit {
  title: string;
  description_1: string;
  description_2: string;
  activeSection: Array<any>;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let sectionName = params.get('sectionName');
      this.showFormats(sectionName);
    });
  }

  showFormats(name) {
    if (name === 'push') {
      this.title = 'Push Ads';
      this.description_1 =
        'Pełnoekranowe reklamy, które pozwalają wykorzystać możliwości telefonu.';
      this.description_2 =
        'Formaty atrakcyjne, interaktywne i wpływające na zaangażowanie.';
      this.activeSection = [
        new Format('Tytuł pusha 1', 'Opis pusha 1', 'URL pusha 1'),
        new Format('Tytuł pusha 2', 'Opis pusha 2', 'URL pusha 2'),
        new Format('Tytuł pusha 3', 'Opis pusha 3', 'URL pusha 3'),
      ];
    }

    if (name === 'fullpage') {
      this.title = 'Fullpage Ads';
      this.description_1 =
        'Pełnoekranowe reklamy, które pozwalają wykorzystać możliwości telefonu.';
      this.description_2 =
        'Formaty atrakcyjne, interaktywne i wpływające na zaangażowanie.';
      this.activeSection = [
        new Format('Tytuł fullpage 1', 'Opis fullpage 1', 'mobiemapp01'),
        new Format('Tytuł fullpage 2', 'Opis fullpage 2', 'URL fullpage 2'),
        new Format('Tytuł fullpage 3', 'Opis fullpage 3', 'URL fullpage 3'),
      ];
    }

    if (name === 'video') {
      this.title = 'Video Ads';
      this.description_1 =
        'Pełnoekranowe reklamy, które pozwalają wykorzystać możliwości telefonu.';
      this.description_2 =
        'Formaty atrakcyjne, interaktywne i wpływające na zaangażowanie.';
      this.activeSection = [
        new Format('Tytuł video 1', 'Opis video 1', 'URL video 1'),
        new Format('Tytuł video 2', 'Opis video 2', 'URL video 2'),
        new Format('Tytuł video 3', 'Opis video 3', 'URL video 3'),
      ];
    }
  }

  showUrl(url: string) {
    alert(url);
  }
}
