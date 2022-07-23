import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescollectionComponent } from './moviescollection.component';

describe('MoviescollectionComponent', () => {
  let component: MoviescollectionComponent;
  let fixture: ComponentFixture<MoviescollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviescollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
