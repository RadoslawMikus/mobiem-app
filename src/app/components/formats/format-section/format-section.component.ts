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
        'Docieraj do szczegółowo sprofilowanych użytkowników.';
      this.description_2 =
        'User otrzymuje reklamę w głównym oknie powiadomień telefonu.';
      this.activeSection = [
        new Format('Push graficzny', 'Ikona + Tytuł + Banner', 'mobiemapp06'),
        new Format('Push tekstowy', 'Ikona + Tytuł + Tekst', 'mobiemapp08'),
      ];
    }

    if (name === 'fullpage') {
      this.title = 'Fullpage Ads';
      this.description_1 =
        'Pełnoekranowe reklamy, które pozwalają wykorzystać możliwości smartfona.';
      this.description_2 =
        'Formaty atrakcyjne wizualnie, angażujące i interaktywne.';
      this.activeSection = [
        new Format(
          'Interstitial Display',
          'Reklama pełnoekranowa',
          'mobiemapp01'
        ),
        new Format(
          'Interstitial Video',
          'Fullpage z osadzonym wideo',
          'URL fullpage 2'
        ),
        new Format(
          'Animation Rich Media',
          'Atrakcyjna wizualnie',
          'URL fullpage 3'
        ),
        new Format(
          'Scratch Rich Media',
          'Gest przetarcia ekranu',
          'mobiemapp01'
        ),
        new Format(
          'Slider Rich Media',
          'Przesuwaj i porównaj',
          'URL fullpage 2'
        ),
        new Format(
          'Game Rich Media',
          'Interaktywne zaangażowanie',
          'URL fullpage 3'
        ),
        new Format(
          'Quiz Rich Media',
          'Przyciągnij uwagę na dłużej',
          'mobiemapp01'
        ),
        new Format('Memo Rich Media', 'Prosta gra logiczna', 'URL fullpage 2'),
        new Format(
          'Fullpage Story Ad',
          'Więcej informacji na ekranie',
          'URL fullpage 3'
        ),
        new Format(
          'Fullpage Legal Prawny',
          'Format do specjalnych zadań',
          'URL fullpage 3'
        ),
      ];
    }

    if (name === 'video') {
      this.title = 'Video Ads';
      this.description_1 = 'Krótkie formaty video to przyszłość.';
      this.description_2 =
        'Wykorzystaj potencjał reklamowy spotów video na smartfonach.';
      this.activeSection = [
        new Format(
          'Pre-roll Video Ad',
          'Krótkie, niepomijalne wideo ',
          'mobiemapp01'
        ),
        new Format(
          'Video Ad z endcard',
          'Spot z ekranem końcowym',
          'URL video 2'
        ),
        new Format(
          'Rewarded Video',
          'Wysoki poziom widoczności',
          'URL video 3'
        ),
        new Format(
          'Rewarded Video z endcard',
          'Spot z ekranem końcowym',
          'URL video 4'
        ),
      ];
    }

    if (name === 'banner') {
      this.title = 'Banner Ads';
      this.description_1 = 'Klasyczne formaty reklamowe w mobile.';
      this.description_2 =
        'Twój komunikat reklamowy będzie zauważalny i dopasowany do odbiorcy.';
      this.activeSection = [
        new Format('Mobile Banner HD', '640x100 px', 'URL banner 1'),
        new Format('Rectangle Banner', '300x250px ', 'URL banner 2'),
        new Format('Halfpage Ad', '300x600 px', 'URL banner 3'),
      ];
    }
  }

  showUrl(url: string) {
    alert(url);
  }
}
