import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApproveComponent } from './review-approve.component';

describe('ReviewApproveComponent', () => {
  let component: ReviewApproveComponent;
  let fixture: ComponentFixture<ReviewApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
