import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAnalyticsComponent } from './crypto-analytics.component';

describe('CryptoAnalyticsComponent', () => {
  let component: CryptoAnalyticsComponent;
  let fixture: ComponentFixture<CryptoAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
