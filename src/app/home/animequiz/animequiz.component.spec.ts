import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimequizComponent } from './animequiz.component';

describe('AnimequizComponent', () => {
  let component: AnimequizComponent;
  let fixture: ComponentFixture<AnimequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimequizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
