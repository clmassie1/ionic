import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPlayerPage } from './podcast-player.page';

describe('PodcastPlayerPage', () => {
  let component: PodcastPlayerPage;
  let fixture: ComponentFixture<PodcastPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
