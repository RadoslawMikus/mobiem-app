import { Campaign } from './single-campaign/campaign.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule, MatTabNavPanel } from '@angular/material/tabs';
// import {Component} from '@angular/core';
// import { ThemePalette } from '@angular/material/core';
// import { MatButtonModule } from '@angular/material/button';
// import { NgFor } from '@angular/common';
// import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent {
  searchbar = '';
  searchActive = false;
  allArrays: Array<any>;
  old: Array<any>;
  current: Array<any>;
  reaction: Array<any>;
  searchArray: Array<any> = [];
  historyArray: Array<any> = [];
  filters: Object = {
    running: false,
    for_testing: false,
    history: false,
  };

  activeTab: string = 'current';
  previousTab: string = 'current';

  activeLink = 'current';
  // background: ThemePalette = undefined;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    //   if (this.router.getCurrentNavigation().previousNavigation !== null) {
    //     if (
    //       this.router
    //         .getCurrentNavigation()
    //         .previousNavigation.finalUrl.toString() === '/formats' ||
    //       this.router
    //         .getCurrentNavigation()
    //         .previousNavigation.finalUrl.toString() === '/login' ||
    //       this.router
    //         .getCurrentNavigation()
    //         .previousNavigation.finalUrl.toString() === '/contact'
    //     ) {
    //       console.log(
    //         this.router
    //           .getCurrentNavigation()
    //           .previousNavigation.finalUrl.toString()
    //       );
    //       this.searchActive = false;
    //       this.searchbar = '';
    //       this.filters['running'] = false;
    //       this.filters['for_testing'] = false;
    //       this.filters['history'] = false;
    //       sessionStorage.setItem('searchbar', this.searchbar);
    //       sessionStorage.setItem('filters', JSON.stringify(this.filters));
    //     }
    //   }
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.allArrays = data['allArr'];
      this.historyArray = [
        data['allArr'][0],
        data['allArr'][7],
        data['allArr'][1],
      ];
      this.old = this.allArrays.filter((el) => el.history);
      this.current = this.allArrays.filter((el) => el.running);
      this.reaction = this.allArrays.filter(
        (el) =>
          (el.alreadyTested && !el.running && !el.history) || el.newCampaign
      );
    });

    if (this.searchGet() !== null) {
      this.searchIt(this.searchGet());
    }
    if (this.filtersGet() !== null) {
      this.filters = this.filtersGet();
    }
    if (sessionStorage.getItem('activeTab') !== null) {
      if (
        sessionStorage.getItem('activeTab') === 'search' ||
        sessionStorage.getItem('activeTab') === 'current'
      ) {
        this.activeTab = 'current';
        this.activeLink = 'current';
      } else if (sessionStorage.getItem('activeTab') === 'history') {
        this.activeTab = 'history';
        this.activeLink = 'history';
      }
    }
    // console.log(sessionStorage.getItem('activeTab'));
    this.changeFilter('');
  }

  addToHistory() {
    if (this.searchbar.length > 2) {
      const obie = [...this.searchArray, ...this.historyArray];
      const map = new Map(obie.map((pos) => [pos.id, pos]));
      const uniques = [...map.values()];
      this.historyArray = uniques.slice(0, 10);
      // console.log(this.historyArray);
    }
  }

  removeFromHistory(e) {
    const id = +e.srcElement.id.replace(/^\D+/g, '');
    for (let his of this.historyArray) {
      if (his.id == id) {
        this.historyArray.splice(this.historyArray.indexOf(his), 1);
      }
    }
  }

  delete(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  changeFilter($event) {
    // console.log($event !== '');
    let title = Object.keys(this.filters)
      .filter((el) => this.filters[el] === true)
      .toString();
    if ($event !== '') {
      title = $event.target.title;
      let currentStatus = this.filters[$event.target.title];
      this.filters['running'] = false;
      this.filters['for_testing'] = false;
      this.filters['history'] = false;
      if ($event.target.title !== undefined) {
        this.filters[$event.target.title] = !currentStatus;
      }
    }

    this.filtersSave();

    if (this.filters['running'] || this.filters['history']) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          (el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
            el.name.toLowerCase().includes(this.searchbar.toLowerCase())) &&
          el[title]
      );
    } else if (this.filters['for_testing']) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          (el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
            el.name.toLowerCase().includes(this.searchbar.toLowerCase())) &&
          !el['running'] &&
          !el['history']
      );
    } else {
      this.searchArray = this.allArrays.filter(
        (el) =>
          el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
          el.name.toLowerCase().includes(this.searchbar.toLowerCase())
      );
    }

    // console.log(
    //   Object.keys(this.filters)
    //     .filter((el) => this.filters[el] === true)
    //     .toString()
    // );
    // console.log(this.filters);
    this.addToHistory();
  }

  makeSearchActive() {
    this.searchActive = !this.searchActive;
    if (this.searchActive) {
      this.previousTab = this.activeTab;
      this.activeTab = 'search';
      // console.log(this.activeTab);
      sessionStorage.setItem('activeTab', this.activeTab);
    }

    if (!this.searchActive) {
      this.activeTab = this.previousTab;
    }
    this.searchbar = '';
    this.filters['running'] = false;
    this.filters['for_testing'] = false;
    this.filters['history'] = false;
    sessionStorage.setItem('searchbar', this.searchbar);
    sessionStorage.setItem('filters', JSON.stringify(this.filters));
  }

  searchIt($event) {
    this.searchbar = $event;
    // console.log(this.searchbar);
    if (
      !this.filters['running'] &&
      !this.filters['for_testing'] &&
      !this.filters['history']
    ) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
          el.name.toLowerCase().includes(this.searchbar.toLowerCase())
        // && this.searchbar !== ''
      );
    }
    if (
      this.filters['running'] &&
      !this.filters['for_testing'] &&
      !this.filters['history']
    ) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          (el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
            el.name.toLowerCase().includes(this.searchbar.toLowerCase())) &&
          el.running
      );
    }
    if (
      this.filters['for_testing'] &&
      !this.filters['running'] &&
      !this.filters['history']
    ) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          (el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
            el.name.toLowerCase().includes(this.searchbar.toLowerCase())) &&
          !el.running &&
          !el.history
      );
    }
    if (
      this.filters['history'] &&
      !this.filters['for_testing'] &&
      !this.filters['running']
    ) {
      this.searchArray = this.allArrays.filter(
        (el) =>
          (el.client.toLowerCase().includes(this.searchbar.toLowerCase()) ||
            el.name.toLowerCase().includes(this.searchbar.toLowerCase())) &&
          el.history
      );
    }

    this.addToHistory();
  }

  filtersSave() {
    sessionStorage.setItem('filters', JSON.stringify(this.filters));
  }

  filtersGet() {
    return JSON.parse(sessionStorage.getItem('filters'));
  }

  searchSave() {
    sessionStorage.setItem('searchbar', this.searchbar);
  }

  searchGet() {
    if (
      sessionStorage.getItem('searchbar') !== null &&
      sessionStorage.getItem('searchbar') !== ''
    ) {
      this.searchActive = true;
    }
    return sessionStorage.getItem('searchbar');
  }

  changeTab(par) {
    this.activeTab = par;
    sessionStorage.setItem('activeTab', this.activeTab);
  }
}
