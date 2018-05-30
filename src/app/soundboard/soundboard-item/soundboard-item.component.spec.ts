import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundboardItemComponent } from './soundboard-item.component';

describe('SoundboardItemComponent', () => {
  let component: SoundboardItemComponent;
  let fixture: ComponentFixture<SoundboardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundboardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
