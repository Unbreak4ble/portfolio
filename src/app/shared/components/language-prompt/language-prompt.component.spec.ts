import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePromptComponent } from './language-prompt.component';

describe('LanguagePromptComponent', () => {
  let component: LanguagePromptComponent;
  let fixture: ComponentFixture<LanguagePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
