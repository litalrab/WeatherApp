import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrerntWeatherComponent } from './currerntWeather.component';

describe('MovieComponent', () => {
  let component: CurrerntWeatherComponent;
  let fixture: ComponentFixture<CurrerntWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrerntWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrerntWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
