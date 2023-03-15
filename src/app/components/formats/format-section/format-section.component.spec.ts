import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSectionComponent } from './format-section.component';

describe('FormatSectionComponent', () => {
  let component: FormatSectionComponent;
  let fixture: ComponentFixture<FormatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
