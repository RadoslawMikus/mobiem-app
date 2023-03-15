import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCampaignComponent } from './single-campaign.component';

describe('SingleCampaignComponent', () => {
  let component: SingleCampaignComponent;
  let fixture: ComponentFixture<SingleCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
