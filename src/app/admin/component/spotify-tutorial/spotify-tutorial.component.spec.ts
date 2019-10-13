import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTutorialComponent } from './spotify-tutorial.component';

describe('SpotifyTutorialComponent', () => {
  let component: SpotifyTutorialComponent;
  let fixture: ComponentFixture<SpotifyTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
