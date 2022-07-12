import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyInfoComponent } from './cryptocurrency-info.component';

describe('CryptocurrencyInfoComponent', () => {
  let component: CryptocurrencyInfoComponent;
  let fixture: ComponentFixture<CryptocurrencyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrencyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
