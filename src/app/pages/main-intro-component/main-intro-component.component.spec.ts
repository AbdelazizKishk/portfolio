import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIntroComponentComponent } from './main-intro-component.component';

describe('MainIntroComponentComponent', () => {
  let component: MainIntroComponentComponent;
  let fixture: ComponentFixture<MainIntroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIntroComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainIntroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
