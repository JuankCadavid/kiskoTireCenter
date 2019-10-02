import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtcSpanishComponent } from './ktc-spanish.component';

describe('KtcSpanishComponent', () => {
  let component: KtcSpanishComponent;
  let fixture: ComponentFixture<KtcSpanishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtcSpanishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtcSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
