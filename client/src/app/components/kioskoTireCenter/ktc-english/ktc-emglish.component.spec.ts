import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtcEmglishComponent } from './ktc-emglish.component';

describe('KtcEmglishComponent', () => {
  let component: KtcEmglishComponent;
  let fixture: ComponentFixture<KtcEmglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtcEmglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtcEmglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
