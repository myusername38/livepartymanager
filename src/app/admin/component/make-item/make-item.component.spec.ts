import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeItemComponent } from './make-item.component';

describe('MakeItemComponent', () => {
  let component: MakeItemComponent;
  let fixture: ComponentFixture<MakeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
