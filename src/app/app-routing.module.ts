import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { SingleCampaignComponent } from './components/campaigns/single-campaign/single-campaign.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormatSectionComponent } from './components/formats/format-section/format-section.component';
import { FormatsComponent } from './components/formats/formats.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'campaigns/:id', component: SingleCampaignComponent },
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
