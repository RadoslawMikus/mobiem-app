import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { SingleCampaignComponent } from './components/campaigns/single-campaign/single-campaign.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormatSectionComponent } from './components/formats/format-section/format-section.component';
import { FormatsComponent } from './components/formats/formats.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { LoginComponent } from './components/login/login.component';
import { Campaign } from './components/campaigns/single-campaign/campaign.model';

const allArr = [
  new Campaign(
    1,
    'Biedronka',
    'Świeżaki',
    new Date(2022, 5, 10, 12, 2, 10),
    new Date(2022, 5, 12, 15, 9, 0),
    false,
    true,
    false,
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
    false,
    false
  ),
  new Campaign(
    3,
    'Kaufland',
    'Kauflandziaki',
    new Date(2023, 3, 5, 11, 41, 20),
    new Date(2022, 3, 7, 17, 44, 30),
    true,
    false,
    true,
    false
  ),
  new Campaign(
    4,
    'Biedronka',
    'Świeżaki',
    new Date(2022, 5, 10, 12, 2, 10),
    new Date(2022, 5, 12, 15, 9, 0),
    true,
    false,
    true,
    false
  ),
  new Campaign(
    5,
    'Lidl',
    'Lidlaki',
    new Date(2023, 2, 15, 19, 9, 12),
    new Date(2023, 3, 12, 12, 44, 0),
    true,
    false,
    true,
    false
  ),
  new Campaign(
    6,
    'Kaufland',
    'Kauflandziaki',
    new Date(2023, 3, 5, 11, 41, 20),
    new Date(2022, 3, 7, 17, 44, 30),
    true,
    false,
    true,
    false
  ),
  new Campaign(
    7,
    'Intermarche',
    'Intermarszaki',
    new Date(2021, 12, 10, 16, 2, 10),
    new Date(2021, 12, 12, 12, 9, 0),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    8,
    'Castorama',
    'Castoramiaki',
    new Date(2022, 2, 15, 19, 9, 12),
    new Date(2022, 3, 12, 12, 44, 0),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    9,
    'Mrówka',
    'Mrówkojadki',
    new Date(2022, 1, 2, 11, 11, 20),
    new Date(2022, 1, 15, 12, 32, 30),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    10,
    'Żabka',
    'Żabkojady',
    new Date(2020, 2, 2, 12, 2, 10),
    new Date(2020, 5, 12, 43, 9, 0),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    11,
    'Selgros',
    'Selgrosiaki',
    new Date(2019, 2, 15, 19, 9, 12),
    new Date(2019, 3, 12, 12, 44, 0),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    12,
    'Kaufland',
    'Kauflandziaki',
    new Date(2023, 7, 15, 14, 41, 20),
    new Date(2022, 9, 17, 17, 21, 30),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    13,
    'Mrówka',
    'Mrówkojady',
    new Date(2023, 7, 15, 14, 41, 20),
    new Date(2022, 9, 17, 17, 21, 30),
    true,
    false,
    false,
    true
  ),
  new Campaign(
    14,
    'Dino',
    'Diniaki',
    new Date(2023, 7, 15, 14, 41, 20),
    new Date(2022, 9, 17, 17, 21, 30),
    true,
    false,
    false,
    true
  ),
];

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'campaigns',
    component: CampaignsComponent,
    data: { allArr },
  },
  // {
  //   path: 'filters/current',
  //   component: CampaignsComponent,
  //   data: { allArr },
  // },
  // {
  //   path: 'filters/history',
  //   component: CampaignsComponent,
  //   data: { allArr },
  // },
  // {
  //   path: 'filters/search',
  //   component: CampaignsComponent,
  //   data: { allArr },
  // },
  {
    path: 'campaigns/:id',
    component: SingleCampaignComponent,
    data: { allArr },
  },
  { path: 'formats', component: FormatsComponent },
  { path: 'formats/:sectionName', component: FormatSectionComponent },
  { path: 'iframe/:url', component: IframeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
