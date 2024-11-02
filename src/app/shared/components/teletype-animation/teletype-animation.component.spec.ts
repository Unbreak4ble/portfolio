import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeletypeAnimationComponent } from './teletype-animation.component';

describe('TeletypeAnimationComponent', () => {
  let component: TeletypeAnimationComponent;
  let fixture: ComponentFixture<TeletypeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeletypeAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeletypeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
