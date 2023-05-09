import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { FormatsComponent } from './components/formats/formats.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SingleCampaignComponent } from './components/campaigns/single-campaign/single-campaign.component';
import { FormatSectionComponent } from './components/formats/format-section/format-section.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { SafePipe } from './components/iframe/safe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    CampaignsComponent,
    FormatsComponent,
    NavigationComponent,
    SingleCampaignComponent,
    FormatSectionComponent,
    IframeComponent,
    SafePipe,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
