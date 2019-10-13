import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySetupComponent } from './party-setup.component';

describe('PartySetupComponent', () => {
  let component: PartySetupComponent;
  let fixture: ComponentFixture<PartySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
