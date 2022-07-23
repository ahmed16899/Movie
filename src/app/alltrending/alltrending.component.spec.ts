import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltrendingComponent } from './alltrending.component';

describe('AlltrendingComponent', () => {
  let component: AlltrendingComponent;
  let fixture: ComponentFixture<AlltrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
