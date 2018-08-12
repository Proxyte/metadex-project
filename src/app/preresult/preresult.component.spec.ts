import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreresultComponent } from './preresult.component';

describe('PreresultComponent', () => {
  let component: PreresultComponent;
  let fixture: ComponentFixture<PreresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
