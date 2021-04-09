import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLinesCreateComponent } from './request-lines-create.component';

describe('RequestLinesCreateComponent', () => {
  let component: RequestLinesCreateComponent;
  let fixture: ComponentFixture<RequestLinesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLinesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
