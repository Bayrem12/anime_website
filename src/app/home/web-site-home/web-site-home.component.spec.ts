import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteHomeComponent } from './web-site-home.component';

describe('WebSiteHomeComponent', () => {
  let component: WebSiteHomeComponent;
  let fixture: ComponentFixture<WebSiteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSiteHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebSiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
